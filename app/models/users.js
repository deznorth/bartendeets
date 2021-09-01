const pgClient = require('../dbClient');

exports.getAuthenticatedUser = (username, password) => pgClient.use(conn => {
  const queryString = `
    SELECT username
    FROM users
    WHERE username = $1 AND password = $2
  `;

  return conn.query(queryString, [username, password]);
});
