const salesModel = require('../models/sales');

const getAll = async () => salesModel.list();

const findById = async (id) => {
  const product = await salesModel.findById(id);

  if (!product) return false;

  return product;
};

const remove = async (id) => salesModel.remove(id);

module.exports = {
  getAll,
  findById,
  remove,
};