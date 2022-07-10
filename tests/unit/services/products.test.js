const { expect } = require("chai");
const sinon = require("sinon");
const productModel = require('../../../models/products');
const productService = require('../../../services/products');

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

const productId = { id: 1, name: 'Martelo de Thor' };

describe('ProductServices', () => {
  beforeEach(() => {
    sinon.restore();
  })
  describe('#findById', () => {
    it('ao mandar um registro de um id que existe deve retornar o produto específico', async () => {
      sinon.stub(productModel, 'findById').resolves(productId);
      const result = await productService.findById(1);
      expect(result).to.be.equal(productId);
  })
    it('ao mandar um registro de um id que existe, deve retornar um objeto', async () => {
      sinon.stub(productModel, 'findById').resolves(productId);
      const product = await productService.findById(1);
      expect(product).to.be.a('object');
  })
  });
  describe('#update', () => {
    it('edita um produto se passar um id e nome válidos', async () => {
      sinon.stub(productModel, 'update').resolves({ id: 1, name: 'Teia do homem aranha' });
      const result = await productService.update(1, { name: "Teia do homem aranha" });
      expect(result).to.be.deep.equal({ id: 1, name: 'Teia do homem aranha' });
    });
    it('edita um produto e retorna um objeto', async () => {
      sinon.stub(productModel, 'update').resolves({ id: 1, name: 'Teia do homem aranha' });
      const result = await productService.update(1, { name: "Teia do homem aranha" });
      expect(result).to.be.a('object');
    })
  })
  describe('#getAll', () => {
    it('lista produtos', async () => {
      sinon.stub(productModel, 'list').resolves(listProducts);
      const result = await productService.getAll();
      expect(result).to.be.equal(listProducts);
    });
    it('a lista de produtos deve ser um array', async () => {
      sinon.stub(productModel, 'list').resolves(listProducts);
      const result = await productService.getAll();
      expect(result).to.be.a('array');
    })
  })
  describe('#create', () => {
    it('cria um produto se passar um nome válido', async () => {
      sinon.stub(productModel, 'create').resolves({ id: 4, name: "Escudo do Homem América" });
      const result = await productService.createProduct({ name: "Escudo do Homem América" });
      expect(result).to.be.deep.equal({ id: 4, name: "Escudo do Homem América" });
    });
    it('cria um produto e retorna um objeto', async () => {
      sinon.stub(productModel, 'create').resolves({ id: 4, name: "Escudo do Homem América" });
      const result = await productService.createProduct({ name: "Escudo do Homem América" });
      expect(result).to.be.a('object');
    })
  })
  describe('#remove', () => {
    it('deleta um produto com o id específico', async () => {
      sinon.stub(productModel, 'remove').resolves();
      const result = await productService.remove(1);
      expect(result).to.be.not.a('object');
    });
  })
});