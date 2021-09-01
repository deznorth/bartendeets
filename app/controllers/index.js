const express = require('express');
const rootRouter = express.Router();
const { authRequired } = require('../middleware/auth');

const example = require('./example');
const auth = require('./auth');
const drinks = require('./drinks');
const orders = require('./orders');

rootRouter.use('/example', example);
rootRouter.use('/auth', auth);
rootRouter.use('/drinks', drinks);
rootRouter.use('/orders', authRequired, orders);

module.exports = rootRouter;