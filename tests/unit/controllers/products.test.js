const { expect } = require("chai");
const sinon = require("sinon");
const productsController = require("../../../controllers/products");
const productServices = require("../../../services/products");

const listProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Mandi"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

describe('ProductController', () => {
  beforeEach(() => {
    sinon.restore();
  });
  describe('#findId', () => {
    it('ao mandar um registro de um id que existe, deve retornar o produto específico', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productServices, 'findById').resolves(listProducts[0]);
      await productsController.findId(req, res);
      expect(res.json.calledWith(listProducts[0])).to.be.equal(true);
    })
    it('ao mandar um registro de um id que existe deve retornar um status 200', async () => {
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productServices, 'findById').resolves(listProducts[0]);
      await productsController.findId(req, res);
      expect(res.status.calledWith(200)).to.be.true;
    })
  });
//  describe.only('#update', () => {
//    it('edita um produto se passar um id e nome válidos', async () => {
//      const req = {
//        params: { id: 1 },
//        body: { name: 'Teia do homem aranha' }
//      };
//      const res = {};
//
//      res.status = sinon.stub().returns(res);
//      res.json = sinon.stub();
//
//      sinon.stub(productServices, 'update').resolves({ id: 1, name: 'Teia do homem aranha' });
//      await productsController.update(req, res);
//     expect(res.json.calledWith({ id: 1, name: 'Teia do homem aranha' })).to.be.equal(true);
//    });
//    it('edita um produto e retorna um status 200', async () => {
//      const req = {
//        params: { id: 1 },
//        body: { name: 'Teia do homem aranha' }
//      };
//      const res = {};
//
//      res.status = sinon.stub().returns(res);
//      res.json = sinon.stub();
//
//      sinon.stub(productServices, 'update').resolves({ id: 1, name: 'Teia do homem aranha' });
//
//      await productsController.update(req, res);
//
//      expect(res.status.calledWith(200)).to.be.equal(true);
//    })
//  })
  describe('#listAll', () => {
    it('lista produtos', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productServices, 'getAll').resolves(listProducts);
      await productsController.listAll(req, res);
      expect(res.json.calledWith(listProducts)).to.be.equal(true);
    });
    it('a lista de produtos retornar um status 200', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productServices, 'getAll').resolves(listProducts);
      await productsController.listAll(req, res);
      expect(res.status.calledWith(200)).to.be.equal(true);
    })
  })
  describe('#create', () => {
    it('cria um produto se passar um nome válido', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.body = { name: "Escudo do Homem América" };

      sinon.stub(productServices, 'createProduct').resolves({ id: 4, name: "Escudo do Homem América" });
      await productsController.create(req, res);
      expect(res.json.calledWith({ id: 4, name: "Escudo do Homem América" })).to.be.equal(true);
    });
    it('cria um produto e retorna um status 201', async () => {
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      req.body = { name: "Escudo do Homem América" };

      sinon.stub(productServices, 'createProduct').resolves({ id: 4, name: "Escudo do Homem América" });
      await productsController.create(req, res);
      expect(res.status.calledWith(201)).to.be.equal(true);
    })
  })
// describe.('#remove', () => {
//    it('deleta um produto com o id específico retornando um status 204', async () => {
//      const req = { params: { id: 1 } };
//      const res = {};
//
//      res.status = sinon.stub().returns(res);
//      res.json = sinon.stub();
//
//      sinon.stub(productServices, 'remove').resolves();
//      await productsController.remove(req, res);
//     expect(res.status.calledWith(204)).to.be.equal(true);
//    });
//  })
});