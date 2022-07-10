const { expect } = require("chai");
const sinon = require("sinon");
const salesController = require("../../../controllers/sales");
const saleServices = require("../../../services/sales");

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

describe('SalesController', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('#findId', () => {
    it('ao mandar um registro de um id que existe, deve retornar a venda específica', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(saleServices, 'findById').resolves(saleId);
      await salesController.findId(req, res);
      expect(res.json.calledWith(saleId)).to.be.equal(true);
    })
    it('ao mandar um registro de um id que existe deve retornar um status 200', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(saleServices, 'findById').resolves(saleId);
      await salesController.findId(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    })
  });
  describe('#listAll', () => {
    it('lista vendas', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(saleServices, 'getAll').resolves(salesList);
      await salesController.listAll(req, res);
      expect(res.json.calledWith(salesList)).to.be.equal(true);
    });
    it('a lista de vendas retornar um status 200', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(saleServices, 'getAll').resolves(salesList);
      await salesController.listAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  })
});