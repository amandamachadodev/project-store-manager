const connection = require('./connection');

const productsModel = {
//  create: async ({ name }) => {
//    if (!name) return null;
//    const sql = 'INSERT INTO products (name) VALUES (?)';
//    const [{ isertId }] = await connection.execute(sql, [name]);
//    return isertId;
//  },

  list: async () => {
    const sql = 'SELECT * FROM StoreManager.products;';
    const [products] = await connection.execute(sql);
    return products;
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM StoreManager.products WHERE id=?;';
    const [[product]] = await connection.execute(sql, [id]);
    return product;
  },
};

module.exports = {
  productsModel,
};