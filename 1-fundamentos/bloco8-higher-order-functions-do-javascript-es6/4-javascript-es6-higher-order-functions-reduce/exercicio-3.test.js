const {containsA} = require('./exercicio-3');

describe('testes function containsA', () => {
  it('é função', () => {
    expect(typeof containsA).toBe('function');
  });
  it('retorna o resultado esperado', () => {
    expect(containsA()).toBe(20);
  });
});
