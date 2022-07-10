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
    "name": "Mandi"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

describe('ProductModel', () => {
  describe('#findById', () => {
    beforeEach(() => {
      sinon.restore();
    })
    it('ao mandar um registro de um id que existe, deve retornar o produto específico', async () => {
      sinon.stub(connection, 'execute').resolves({ id: 1, name: 'Martelo de Thor' });
      const product = await productModel.findById(1);
      expect(product).to.be.equal({ id: 1, name: 'Martelo de Thor' });
    })
    it('ao mandar um registro de um id que não existe, deve retornar undefined', async () => {
      sinon.stub(connection, 'execute').resolves(undefined);
      const product = await productModel.findById(36);
      expect(product).to.be.equal(undefined);
    })
    it('ao mandar um registro de um id que existe, deve retornar um objeto', async () => {
      sinon.stub(connection, 'execute').resolves({ id: 1, name: 'Martelo de Thor' });
      const product = await productModel.findById(1);
      expect(product).to.be.a('object');
    })
  })
  describe('#update', () => {
    it('edita um produto se passar um id e nome válidos', async () => {
      const result = await productModel.update(1, { name: "Teia do homem aranha" });
      sinon.stub(connection, 'execute').resolves({ id: 1, name: 'Teia do homem aranha' });
      expect(result).to.be.equal({ id: 1, name: 'Teia do homem aranha' });
    });
    it('edita um produto e retorna um objeto', async () => {
      const result = await productModel.update(1, { name: "Teia do homem aranha" });
      sinon.stub(connection, 'execute').resolves({ id: 1, name: 'Teia do homem aranha' });
      expect(result).to.be.a('object');
    })
  })
  describe('#list', () => {
    it('lista produtos', async () => {
      const result = await productModel.list();
      sinon.stub(connection, 'execute').resolves(listProducts);
      expect(result).to.be.equal(listProducts);
    });
    it('a lista de produtos deve ser um array', async () => {
      const result = await productModel.list();
      sinon.stub(connection, 'execute').resolves(listProducts);
      expect(result).to.be.a('array');
    })
  })
  describe('#create', () => {
    it('cria um produto se passar um nome válido', async () => {
      const result = await productModel.update({ name: "Escudo do Homem América" });
      sinon.stub(connection, 'execute').resolves({id: 4, name: "Escudo do Homem América"});
      expect(result).to.be.equal({ id: 4, name: "Escudo do Homem América" });
    });
    it('cria um produto e retorna um objeto', async () => {
      const result = await productModel.update({ name: "Escudo do Homem América" });
      sinon.stub(connection, 'execute').resolves({ id: 4, name: "Escudo do Homem América" });
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