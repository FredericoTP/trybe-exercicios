const { reduceNames, averageAge, longestNamedBook } = require('./exercicio-2');

describe('testes function reduceNames', () => {
  it('é função', () => {
    expect(typeof reduceNames).toBe('function');
  });
  it('retorna o resultado esperado', () => {
    expect(reduceNames()).toEqual('George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft');
  });
});

describe('testes function averageAge', () => {
  it('é função', () => {
    expect(typeof averageAge).toBe('function');
  });
  it('retorna o resultado esperado', () => {
    expect(averageAge()).toBe(43);
  });
});

describe('testes function longestNamedBook', () => {
  it('é função', () => {
    expect(typeof longestNamedBook).toBe('function');
  });
  it('retorna o resultado esperado', () => {
    expect(longestNamedBook()).toEqual({id: 1, name: 'As Crônicas de Gelo e Fogo', genre: 'Fantasia', author: { name: 'George R. R. Martin', birthYear: 1948 }, releaseYear: 1991});
  });
});
