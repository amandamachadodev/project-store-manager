const productsService = require('../services/products');

const listAll = async (_req, res) => {
  const data = await productsService.getAll();
  return res.status(200).json(data);
};

const findId = async (req, res) => {
  const { id } = req.params;

  const product = await productsService.findById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

const create = async (req, res) => {
  const { name } = req.body;
    
  const result = await productsService.createProduct(name);
  
  return res.status(201).json(result);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const product = await productsService.findById(id);

  if (product === undefined || product.length === 0) {
    return res.status(404).json({ message: 'Product not found!' });
  } 
    await productsService.remove(id);
    return res.sendStatus(204);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = await productsService.findById(id);

  if (product === undefined || product.length === 0) {
    return res.status(404).json({ message: 'Product not found!' });
  } 

  const result = await productsService.update(id, name);

  return res.status(201).json(result);
};

module.exports = { listAll, findId, create, remove, update };