const { Router } = require('express');

const sales = require('../controllers/sales');

const salesRoute = Router();

salesRoute.get('/', sales.listAll);

salesRoute.get('/:id', sales.findId);

module.exports = salesRoute;