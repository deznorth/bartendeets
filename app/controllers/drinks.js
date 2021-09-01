const Router = require('express-promise-router');
const router = new Router();
const { getAllDrinks } = require('../models/drinks');

router.get('/', async (req,res) => {
  const result = await getAllDrinks();
  res.send(result?.rows ?? []);
});

module.exports = router;