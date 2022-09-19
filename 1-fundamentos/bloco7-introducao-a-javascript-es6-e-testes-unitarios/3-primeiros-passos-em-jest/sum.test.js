// A função sum(a, b) retorna a soma do parâmetro a com o b
// Teste se o retorno de sum(4, 5) é 9
// Teste se o retorno de sum(0, 0) é 0
// Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
// Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")

const sum = require('./sum');

describe('Teste sum', () => {
  test('sum retorna 9 se sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('sum retorna 0 se sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });
  test('sum retorna erro se sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
  test('sum retorna "parameters must be numbers" se sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow("parameters must be numbers");
  });
});
