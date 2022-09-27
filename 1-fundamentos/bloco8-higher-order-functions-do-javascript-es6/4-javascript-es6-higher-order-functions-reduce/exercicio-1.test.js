const { exportAllDeclaration } = require('@babel/types');
const { flatten } = require('./exercicio-1');

describe('Testando function flatten', () => {
  it('é função', () => {
    expect(typeof flatten).toBe('function');
  });
  it('retorna o resultado desejado', () => {
    expect(flatten()).toEqual(['1', '2', '3', true, 4, 5, 6]);
  });
});
