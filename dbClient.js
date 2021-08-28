const { Pool } = require('pg');
const pool = new Pool();

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  use: async func => {
    const client = await pool.connect();

    try {
      const result = await func(client);
      return result;
    } catch (err) {
      throw err;
    } finally {
      client?.release();
    }
  },
  useTransaction: async func => {
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      const result = await func(client);
      await client.query('COMMIT');
      return result;
    } catch (err) {
      await client?.query('ROLLBACK');
      throw err;
    } finally {
      client?.release();
    }
  }
}
