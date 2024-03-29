/* eslint-disable max-lines-per-function */
const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const sinon = require('sinon');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', () => {
  beforeEach(() => {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });
  
  afterEach(() => {
    sinon.restore();
  });
  
  describe('Usando o método GET em /chocolates', () => {
    it('Retorna a lista completa de chocolates!', async () => {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', () => {
    it('Retorna o chocolate Mounds', async () => {
      const response = await chai
        .request(app)
        .get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      );
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', () => {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async () => {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate não encontrado!' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', () => {
    it('Retorna os chocolates da marca Lindt & Sprungli', async () => {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total para buscar o total de chocolates', () => {
    it('Retorna o número total de chocolates', async () => {
      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(
        {
          totalChocolates: 4,
        },
      );
    });
  });

  describe('Usando o método GET em /chocolates/search para buscar chocolates por nome', () => {
    it('Retorna os chocolates por nome', async () => {
      const response = await chai.request(app).get('/chocolates/search?name=mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal([
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ]);
    });

    it('Retorna array vazio se não achar nenhum chocolate', async () => {
      const response = await chai.request(app).get('/chocolates/search?name=ye');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id para atualizar um chocolate', () => {
    it('Retorna o chocolate atualizado', async () => {
      const response = await chai.request(app)
      .put('/chocolates/1')
      .send({ name: 'Mint Pretty Good', brandId: 2 });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({
        chocolate: { 
          id: 1,
          name: 'Mint Pretty Good',
          brandId: 2,
        },
      });
    });

    it('Da um erro caso o chocolate não exista', async () => {
      const response = await chai.request(app)
      .put('/chocolates/555')
      .send({ name: 'Mint Pretty Good', brandId: 2 });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ 
        message: 'chocolate not found',
      });
    });
  });
});