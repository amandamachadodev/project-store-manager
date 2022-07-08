const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../models/connection');
const productModel = require('../models/products.js');


describe('ProductModel', () => {
  describe('#findById', () => {
    beforeEach(() => {
      sinon.restore();
    })
    it('ao mandar um registro de um id que existe, deve retornar true', async () => {
      sinon.stub(connection, 'execute').resolves([[true]]);
      const product = await productModel.product(1);
      expect(product).to.be.equal(true);
    })
    it('ao mandar um registro de um id que não existe, deve retornar false', async () => {
      sinon.stub(connection, 'execute').resolves([[false]]);
      const product = await productModel.product(36);
      expect(product).to.be.equal(false);
    })
  })
});