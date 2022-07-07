const connection = require('./connection');

// const create = async ({ name }) => {
//  if (!name) return null;
//  const sql = 'INSERT INTO StoreManager.products (name) VALUES (?)';
//  const [{ insertId }] = await connection.execute(sql, [name]);
//  return ({ id: insertId, name });
// };

const list = async () => {
  const sql = `
    SELECT SP.sale_id AS 'saleId', S.date, SP.product_id AS 'productId',
    SP.quantity FROM StoreManager.sales_products AS SP
    INNER JOIN StoreManager.sales AS S
    ON S.id = SP.sale_id
    ORDER BY SP.sale_id, SP.product_id;
  `;
  const [sales] = await connection.execute(sql);
  return sales;
};

const findById = async (id) => {
  const sql = `SELECT S.date, SP.product_id AS 'productId', SP.quantity
  FROM StoreManager.sales_products AS SP
  INNER JOIN StoreManager.sales AS S
  ON S.id = SP.sale_id
  WHERE sale_id = ?;`;
  const [sales] = await connection.execute(sql, [id]);
  console.log(sales);
  return sales;
};

const remove = async (id) => {
  const sql = 'DELETE FROM StoreManager.sales WHERE id = ?;';
  await connection.execute(sql, [id]);
};

module.exports = {
  list,
  findById,
  remove,
};