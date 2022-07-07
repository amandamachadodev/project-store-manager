const productsModel = require('../models/products');

const getAll = async () => productsModel.list();

const findById = async (id) => {
  const product = await productsModel.findById(id);

  if (!product) return false;

  return product;
};

const createProduct = async (name) => {
  const newProduct = await productsModel.create(name);
  return newProduct;
};

const remove = async (id) => productsModel.remove(id);

const update = async (changes, id) => {
  const newProduct = await productsModel.update(changes, id);
  return newProduct;
};

module.exports = {
  getAll,
  findById,
  createProduct,
  remove,
  update,
};