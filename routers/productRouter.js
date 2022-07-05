const { Router } = require('express');
const products = require('../controllers/products');

const productsRoute = Router();

productsRoute.get('/', products.listAll);

productsRoute.get('/:id', products.findId);

productsRoute.post('/', products.create);

module.exports = productsRoute;