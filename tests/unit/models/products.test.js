const { expect } = require("chai");
const sinon = require('sinon');
const connection = require('../../../models/connection');
const productModel = require('../../../models/products');

const listProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

describe('ProductModel', () => {
  beforeEach(() => {
    sinon.restore();
  });

  describe('#findById', () => {
    it('ao mandar um registro de um id que existe, deve retornar o produto específico', async () => {
      sinon.stub(connection, 'execute').resolves([listProducts]);
      const product = await productModel.findById(1);
      expect(product).to.be.equal(listProducts[0]);
    })
    it('ao mandar um registro de um id que não existe, deve retornar undefined', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);
      const product = await productModel.findById(36);
      expect(product).to.be.equal(undefined);
    })
    it('ao mandar um registro de um id que existe, deve retornar um objeto', async () => {
      sinon.stub(connection, 'execute').resolves([listProducts]);
      const product = await productModel.findById(1);
      expect(product).to.be.a('object');
    })
  })
  describe('#update', () => {
    it('edita um produto se passar um id e nome válidos', async () => {
      const result = await productModel.update("Teia do homem aranha", 1);
      expect(result).to.be.deep.equal({ id: 1, name: 'Teia do homem aranha' });
    });
    it('edita um produto e retorna um objeto', async () => {
      const result = await productModel.update("Teia do homem aranha", 1);
      expect(result).to.be.a('object');
    })
  })
  describe('#list', () => {
    it('lista produtos', async () => {
      sinon.stub(connection, 'execute').resolves([listProducts]);
      const result = await productModel.list();
      expect(result).to.be.equal(listProducts);
    });
    it('a lista de produtos deve ser um array', async () => {
      sinon.stub(connection, 'execute').resolves([listProducts]);
      const result = await productModel.list();
      expect(result).to.be.a('array');
    })
  })
  describe('#create', () => {
    it('cria um produto se passar um nome válido', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4}]);
      const result = await productModel.create("Escudo do Homem América");
      expect(result).to.be.deep.equal({ id: 4, name: "Escudo do Homem América" });
    });
    it('cria um produto e retorna um objeto', async () => {
      sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
      const result = await productModel.create("Escudo do Homem América");
      expect(result).to.be.a('object');
    })
  })
  describe('#remove', () => {
    it('deleta um produto com o id específico', async () => {
      const result = await productModel.remove(1);
      sinon.stub(connection, 'execute').resolves();
      expect(result).to.be.not.a('object');
    });
  })
});