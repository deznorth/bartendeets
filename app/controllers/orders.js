const Router = require('express-promise-router');
const router = new Router();
const {
  getAllOrders,
  createOrder,
} = require('../models/orders');

// Get all orders
router.get('/', async (req, res) => {
  const orders = await getAllOrders();
  res.send(orders ?? []);
});

// Create an order
router.post('/', async (req, res) => {
  const result = await createOrder(req.body);
  res.send(result);
});

// Update an order
router.put('/:orderId', (req, res) => {
  res.send(`update the order with id = ${req.params.orderId}`);
});

// Delete an order
router.delete('/:orderId', (req, res) => {
  res.send(`delete the order with id = ${req.params.orderId}`);
});

module.exports = router;