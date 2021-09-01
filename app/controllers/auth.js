// This is a very rough, basic and insecure implementation just for the sake of this tiny demo app.

const Router = require('express-promise-router');
const router = new Router();
const { getAuthenticatedUser } = require('../models/users');

// Login
router.post('/', async (req,res) => {
  const {
    username,
    password,
  } = req.body;

  const result = await getAuthenticatedUser(username, password);

  if (result?.rows?.length < 1) return res.status(401).send({
    error: 'Wrong username or password',
  });

  res.cookie('currentUser', JSON.stringify(result.rows[0]), { maxAge: 15 * 60 * 1000 });
  res.send(result.rows[0]);
});

// Logout
router.post('/logout', (req,res) => {
  res.cookie('currentUser', '', { maxAge: 0 });
  res.send('log the user out');
});

module.exports = router;