const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/sales');

const saleId = [
  {
    "date": "2022-07-09T21:54:07.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-07-09T21:54:07.000Z",
    "productId": 2,
    "quantity": 10
  }
];
const salesList = [
  {
    "saleId": 1,
    "date": "2022-07-09T21:54:07.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-07-09T21:54:07.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-07-09T21:54:07.000Z",
    "productId": 3,
    "quantity": 15
  }
];

describe('SalesModel', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('#findById', () => {
    it('ao mandar um registro de um id que existe, deve retornar uma venda específica', async () => {
      sinon.stub(connection, 'execute').resolves([saleId]);
      const result = await salesModel.findById(1);
      expect(result).to.be.equal(saleId);
    })
    it('ao mandar um registro de um id que não existe, deve retornar undefined', async () => {
      sinon.stub(connection, 'execute').resolves([]);
      const result = await salesModel.findById(36);
      expect(result).to.be.equal(undefined);
    })
    it('ao mandar um registro de um id que existe, deve retornar um array', async () => {
      sinon.stub(connection, 'execute').resolves([saleId]);
      const result = await salesModel.findById(1);
      expect(result).to.be.a('array');
    })
  })
  describe('#list', () => {
    it('lista vendas', async () => {
      sinon.stub(connection, 'execute').resolves([salesList]);
      const result = await salesModel.list();
      expect(result).to.be.equal(salesList);
    });
    it('a lista de vendas deve ser um array', async () => {
      sinon.stub(connection, 'execute').resolves([salesList]);
      const result = await salesModel.list();
      expect(result).to.be.a('array');
    })
  })
  describe('#remove', () => {
    it('deleta uma venda com o id específico', async () => {
      const result = await salesModel.remove(1);
      sinon.stub(connection, 'execute').resolves();
      expect(result).to.be.not.a('object');
    });
  })
});