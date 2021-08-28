const Router = require('express-promise-router');
const router = new Router();
const pgClient = require('../dbClient');

router.get('/', (req,res) => {
    res.send({ secretMessage: 'Hello World!' });
});

router.get('/testdbconnection', (req, res) => {
    pgClient.use(async conn => {
        const queryResult = await conn.query('SELECT NOW()');
        res.send(queryResult);
    });
});

module.exports = router;