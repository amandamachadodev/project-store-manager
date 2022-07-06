const connection = require('./connection');

const create = async (name) => {
//  if (!name) return null;
  const sql = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [{ insertId }] = await connection.execute(sql, [name]);
  console.log({ id: insertId, name });
  return ({ id: insertId, name });
};

const list = async () => {
  const sql = 'SELECT id, name FROM StoreManager.products ORDER BY id;';
  const [products] = await connection.execute(sql);
  return products;
};

const findById = async (id) => {
  const sql = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [[product]] = await connection.execute(sql, [id]);
  if (!product) return null;
  return product;
};

module.exports = {
  list,
  findById,
  create,
};