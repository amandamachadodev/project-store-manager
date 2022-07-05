const express = require('express');

const productsRoute = require('./routers/productRouter');

const app = express();
app.use(express.json());

app.use('/products', productsRoute);
// não remova esse endpoint, é para o avaliador funcionar

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 

module.exports = app;