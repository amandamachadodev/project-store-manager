const connection = require('./connection');

const create = async (name) => {
//  if (!name) return null;
  const sql = 'INSERT INTO StoreManager.products (name) VALUES (?);';
  const [{ insertId }] = await connection.execute(sql, [name]);
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
  return product;
};

const remove = async (id) => {
  const sql = 'DELETE FROM StoreManager.products WHERE id = ?;';
  await connection.execute(sql, [id]);
};

const update = async (name, id) => {
  const sql = 'UPDATE StoreManager.products SET name = (?) WHERE id = ?';
  await connection.execute(sql, [name, id]);
  return { id, name };
};

module.exports = {
  list,
  findById,
  create,
  remove,
  update,
};