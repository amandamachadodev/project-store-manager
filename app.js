const express = require('express');

const app = express();

const products = require('./controllers/products');

// app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/products', products.listAll);

app.get('/products/:id', products.findId);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;