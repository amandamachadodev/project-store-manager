const connection = require('./connection');

const getAll = async () => {
  const results = await connection.execute('SELECT id, name FROM products');
  return results;
};

const create = async ({ name }) => {
  const sql = 'INSERT INTO products (name) VALUES (?)';
  const [{ isertId }] = await connection.execute(sql, [name]);
  return isertId;
};

module.exports = {
  getAll, create,
};