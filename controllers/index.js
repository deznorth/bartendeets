const express = require('express');
const rootRouter = express.Router();

const example = require('./example');

rootRouter.use('/example', example);

module.exports = rootRouter;