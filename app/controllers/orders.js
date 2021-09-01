const Router = require('express-promise-router');
const router = new Router();
const {
  getAllOrders,
  createOrder,
  updateOrderStatus,
  deleteOrder,
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
router.put('/:orderId', async (req, res) => {
  const result = await updateOrderStatus(req.params.orderId, req.body.status);
  res.send(result);
});

// Delete an order
router.delete('/:orderId', async (req, res) => {
  const result = await deleteOrder(req.params.orderId);
  res.send(result);
});

module.exports = router;