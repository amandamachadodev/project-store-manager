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
  const newProduct = await productsModel.create(name);
  return newProduct;
};

const remove = async (id) => productsModel.remove(id);

const update = async (name) => {
  const newProduct = await productsModel.update(name);
  return newProduct;
};

module.exports = {
  getAll,
  findById,
  createProduct,
  remove,
  update,
};