// Considere o seguinte array e manipule-o utilizando reduce para fazer o que é pedido:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Crie uma string com os nomes de todas as pessoas autoras.

function reduceNames() {
  const name = books.map((book) => book.author.name);
  return name.reduce((acc, curr) => `${acc}, ${curr}`);
}

// console.log(reduceNames());

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados. 

function averageAge() {
  const authorAgeRelease = books.map((book) => book.releaseYear - book.author.birthYear);

  return authorAgeRelease.reduce((acc, curr) => acc + curr, 0) / authorAgeRelease.length;
}

// console.log(averageAge());

// Encontre o livro com o maior nome. 

function longestNamedBook() {
  return books.reduce((acc, curr) => curr.name.length > acc.name.length ? curr : acc);
}

// console.log(longestNamedBook());
