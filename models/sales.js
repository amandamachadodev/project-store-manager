const connection = require('./connection');

// const create = async ({ name }) => {
//  if (!name) return null;
//  const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
//  const [{ insertId }] = await connection.execute(sql, [name]);
//  return ({ id: insertId, name });
// };

const list = async () => {
  const sql = `
    SELECT sale_id AS saleId, date, product_id AS
    productId, quantity FROM StoreManager.sales_products ORDER BY sale_id;
  `;
  const [sales] = await connection.execute(sql);
  return sales;
};

const findById = async (id) => {
  const sql = 'SELECT * FROM StoreManager.sales WHERE id = ?;';
  const [[sales]] = await connection.execute(sql, [id]);
  if (!sales) return null;
  return sales;
};
// };

module.exports = {
  list,
  findById,
};