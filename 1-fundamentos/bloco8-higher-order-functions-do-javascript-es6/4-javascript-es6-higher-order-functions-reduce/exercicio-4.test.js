const {studentAverage} = require('./exercicio-4');

describe('testes function studentAverage', () => {
  it('é função', () => {
    expect(typeof studentAverage).toBe('function');
  });
  it('retorna o resultado esperado', () => {
    expect(studentAverage()).toEqual([{ name: 'Pedro Henrique', average: 7.8 }, { name: 'Miguel', average: 9.2 }, { name: 'Maria Clara', average: 8.8 }])
  });
});
