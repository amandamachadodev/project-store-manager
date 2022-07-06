const salesModel = require('../models/sales');

const getAll = async () => salesModel.list();

const findById = async (id) => {
  const product = await salesModel.findById(id);

  if (!product) {
    return {
      error: {
        status: 404,
        message: 'Sale not found',
      },
    };
  }

  return product;
};

module.exports = {
  getAll,
  findById,
};