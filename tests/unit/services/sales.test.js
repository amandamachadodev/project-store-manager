const { expect } = require("chai");
const sinon = require('sinon');
const salesService = require('../../../services/sales')
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

describe('SaleServices', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('#findById', () => {
    it('ao mandar um registro de um id que existe, deve retornar uma venda específica', async () => {
      sinon.stub(salesModel, 'findById').resolves(saleId);
      const result = await salesService.findById(1);
      expect(result).to.be.equal(saleId);
    })
    it('ao mandar um registro de um id que existe, deve retornar um array', async () => {
      sinon.stub(salesModel, 'findById').resolves(saleId);
      const result = await salesService.findById(1);
      expect(result).to.be.a('array');
    })
  })
  describe('#getAll', () => {
    it('lista vendas', async () => {
      sinon.stub(salesModel, 'list').resolves(salesList);
      const result = await salesService.getAll();
      expect(result).to.be.equal(salesList);
    });
    it('a lista de vendas deve ser um array', async () => {
      sinon.stub(salesModel, 'list').resolves(salesList);
      const result = await salesService.getAll();
      expect(result).to.be.a('array');
    })
  })
  describe('#remove', () => {
    it('deleta uma venda com o id específico', async () => {
      sinon.stub(salesModel, 'remove').resolves();
      const result = await salesService.remove(1);
      expect(result).to.be.not.a('object');
    });
  })
});