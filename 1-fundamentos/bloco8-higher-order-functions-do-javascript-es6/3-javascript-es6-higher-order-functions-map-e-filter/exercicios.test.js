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

describe('testando function fantasyOrScienceFiction', () => {
  it('is function', () => {
    expect(typeof fantasyOrScienceFiction).toBe('function');
  });
  it('returns the right answer when called', () => {
    expect(fantasyOrScienceFiction()).toEqual([{id: 1, name: 'As Crônicas de Gelo e Fogo', genre: 'Fantasia', author: { name: 'George R. R. Martin', birthYear: 1948 }, releaseYear: 1991}, {id: 2, name: 'O Senhor dos Anéis', genre: 'Fantasia', author: { name: 'J. R. R. Tolkien', birthYear: 1892 }, releaseYear: 1954}, {id: 3, name: 'Fundação', genre: 'Ficção Científica', author: { name: 'Isaac Asimov', birthYear: 1920 }, releaseYear: 1951}, {id: 4, name: 'Duna', genre: 'Ficção Científica', author: { name: 'Frank Herbert', birthYear: 1920 }, releaseYear: 1965}]);
  });
});

describe('testando function oldBooksOrdered', () => {
  it('is function', () => {
    expect(typeof oldBooksOrdered).toBe('function');
  });
  it('returns the right answer when called', () => {
    expect(oldBooksOrdered()).toEqual([{id: 6, name: 'O Chamado de Cthulhu', genre: 'Terror', author: { name: 'H. P. Lovecraft', birthYear: 1890 }, releaseYear: 1928}, {id: 3, name: 'Fundação', genre: 'Ficção Científica', author: { name: 'Isaac Asimov', birthYear: 1920 }, releaseYear: 1951}, {id: 2, name: 'O Senhor dos Anéis', genre: 'Fantasia', author: { name: 'J. R. R. Tolkien', birthYear: 1892 }, releaseYear: 1954}]);
  });
});