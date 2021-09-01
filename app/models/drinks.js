const pgClient = require('../dbClient');

exports.getAllDrinks = () => pgClient.use(conn => {
  const queryString = `
    SELECT *
    FROM drinks
  `;

  return conn.query(queryString);
});
