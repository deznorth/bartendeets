const pgFormat = require('pg-format');
const pgClient = require('../dbClient');

// Get all orders
exports.getAllOrders = () => pgClient.use(async conn => {
  const ordersQuery = `
    SELECT *
    FROM orders
    ORDER BY created_date
  `;

  const orderDrinksQuery = `
    SELECT *
    FROM drinks d
    JOIN order_drinks od ON d.drink_id = od.drink_id
  `;

  const ordersResult = await conn.query(ordersQuery);
  const orderDrinksResult = await conn.query(orderDrinksQuery);

  const orderDrinks = orderDrinksResult?.rows?.reduce((prev, curr) => {
    if (!prev[curr.order_id]) {
      prev[curr.order_id] = [curr];
    } else {
      prev[curr.order_id].push(curr);
    }
    return prev;
  }, {});

  return ordersResult?.rows?.map(o => {
    o.drinks = orderDrinks[o.order_id];
    return o;
  });
});

// Create an order
exports.createOrder = orderRequest => pgClient.useTransaction(async conn => {
  const orderQuery = `
    INSERT INTO orders (customer_name)
    VALUES ($1)
    RETURNING order_id
  `;

  let orderDrinksQuery = 'INSERT INTO order_drinks (order_id, drink_id, quantity) VALUES ';

  const orderResult = await conn.query(orderQuery, [orderRequest.customer_name]);
  const orderId = orderResult?.rows[0]?.order_id;

  if (!orderId) throw new Error('error creating an order');

  const values = orderRequest.drinks?.map(d => pgFormat('(%L, %L, %L)', orderId, d.drink_id, d.quantity));
  orderDrinksQuery = orderDrinksQuery.concat(values.join(', '));

  const orderDrinksResult = await conn.query(orderDrinksQuery);

  if (orderResult.rowCount === 1 && orderDrinksResult.rowCount === orderRequest.drinks?.length) {
    return orderResult?.rows[0];
  } else {
    throw new Error('error assigning drink to new order');
  }
});

exports.updateOrderStatus = (orderId, status) => pgClient.use(async conn => {
  const query = `
    UPDATE orders
    SET status = $2
    WHERE order_id = $1
    RETURNING *
  `;

  const updateResult = await conn.query(query, [orderId, status]);

  if (updateResult.rowCount === 1) {
    return updateResult?.rows[0];
  } else {
    throw new Error(`error updating order status for order_id = ${orderId}`);
  }
});

exports.deleteOrder = orderId => pgClient.use(async conn => {
  const query = `
    DELETE FROM orders
    WHERE order_id = $1
    RETURNING order_id
  `;

  const deleteResult = await conn.query(query, [orderId]);

  if (deleteResult.rowCount === 1) {
    return deleteResult?.rows[0];
  } else {
    throw new Error(`error deleting order with order_id = ${orderId}`);
  }
});
