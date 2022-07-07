const salesService = require('../services/sales');

const listAll = async (_req, res) => {
  const data = await salesService.getAll();
  return res.status(200).json(data);
};

const findId = async (req, res) => {
  const { id } = req.params;

  const product = await salesService.findById(id);

  if (product.length === 0) return res.status(404).json({ message: 'Sale not found' });

  return res.status(200).json(product);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const sales = await salesService.findById(id);
  if (sales.length === 0) return res.status(404).json({ message: 'Sale not found' });
  await salesService.remove(id);
  return res.sendStatus(204);
};

module.exports = { listAll, findId, remove };