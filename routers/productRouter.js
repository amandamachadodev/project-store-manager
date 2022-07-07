const { Router } = require('express');

const products = require('../controllers/products');

const { isValidName } = require('../middlewares/validateName');

const productsRoute = Router();

productsRoute.get('/', products.listAll);

productsRoute.get('/:id', products.findId);

productsRoute.post('/', isValidName, products.create);

productsRoute.delete('/:id', products.remove);

productsRoute.put('/:id', isValidName, products.update);

module.exports = productsRoute;