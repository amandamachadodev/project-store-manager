const salesModel = require('../models/sales');

const getAll = async () => salesModel.list();

const findById = async (id) => {
  const product = await salesModel.findById(id);

  if (!product) return false;

  return product;
};

module.exports = {
  getAll,
  findById,
};