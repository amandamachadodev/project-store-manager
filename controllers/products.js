const Joi = require('joi');
const productsService = require('../services/products');

const listAll = async (_req, res) => {
  const data = await productsService.getAll();
  return res.status(200).json(data);
};

const findId = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.findById(id);

  if (product.error) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name } = req.body;

  const newProduct = await productsService.createProduct(name);

  if (newProduct.error) return res.status(404).json({ message: 'Product not found' });;

  return res.status(201).json(newProduct);
};

module.exports = { listAll, findId, create };