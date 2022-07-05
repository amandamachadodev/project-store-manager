const productsModel = require('../models/products');

const getAll = async () => productsModel.list();

const findById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) {
    return {
      error: {
        status: 404,
        message: 'Product not found',
      },
    };
  }

  return product;
};

const createProduct = async (name) => {
  if (!name) {
    return {
      error: {
        status: 404,
        message: 'Product not found',
      },
    };
  }
  return productsModel.create(name);
};

module.exports = {
  getAll,
  findById,
  createProduct,
};