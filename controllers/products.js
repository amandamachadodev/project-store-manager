const productsService = require('../services/products');

const listAll = (_req, res) => {
  try {
    const data = productsService.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({ message: 'Deu ruim' });
  }
};

const findById = async (req, res, next) => {
  const { id } = req.params;

  const product = await productsService.findById(id);

  if (product.error) return next(product.error);

  return res.status(200).json(product);
};

module.exports = { listAll, findById };