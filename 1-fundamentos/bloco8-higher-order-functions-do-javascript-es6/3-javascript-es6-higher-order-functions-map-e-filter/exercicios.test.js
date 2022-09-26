const {formatedBookNames, nameAndAge, fantasyOrScienceFiction, oldBooksOrdered, fantasyOrScienceFictionAuthors, oldBooks, authorWith3DotsOnName} = require('./exercicios');

describe('Testando function formatedBookNames', () => {
  it('is function', () => {
    expect(typeof formatedBookNames).toBe('function');
  });
  it('returns the right answer when called', () => {
    expect(formatedBookNames()).toEqual(['As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin', 'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien', 'Fundação - Ficção Científica - Isaac Asimov', 'Duna - Ficção Científica - Frank Herbert', 'A Coisa - Terror - Stephen King', 'O Chamado de Cthulhu - Terror - H. P. Lovecraft']);
  });
});

describe('testando function nameAndAge', () => {
  it('is function', () => {
    expect(typeof nameAndAge).toBe('function');
  });
  it('returns the right answer when called', () => {
    expect(nameAndAge()).toEqual([{ author: 'Isaac Asimov', age: 31 }, { author: 'H. P. Lovecraft', age: 38 }, { author: 'Stephen King', age: 39 }, { author: 'George R. R. Martin', age: 43 }, { author: 'Frank Herbert', age: 45 }, { author: 'J. R. R. Tolkien', age: 62 }]);
  });
});