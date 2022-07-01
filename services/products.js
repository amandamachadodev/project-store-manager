const productsModel = require('../models/products');

const getAll = async () => productsModel.list();

const findById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) {
    return {
      error: {
        status: 404,
        message: 'Id não encontrado',
      },
    };
  }

  return product;
};

module.exports = {
  getAll,
  findById,
};