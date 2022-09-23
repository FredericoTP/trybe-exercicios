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

// 1- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947. 

const firstPerson1947 = (array) => {
  const person = array.find((element) => element.author.birthYear === 1947);

  return person.author.name;
}

console.log(firstPerson1947(books));

// 2- Retorne o nome do livro de menor nome. 

const lowestTitle = (array) => {
  let length = array[0].name.length;
  let name = ''
  array.forEach((element) => {
    if (element.name.length < length) {
      length = element.name.length;
      name = element.name;
    }
  });
  return name;
}
console.log(lowestTitle(books));

// 3- Encontre o primeiro livro cujo nome possui 26 caracteres. 

const getNameBook = (array, size) => {
  const book = array.find((element) => element.name.length === size);

  return book.name;
}

console.log(getNameBook(books, 26));

// 4- Ordene os livros por data de lançamento em ordem decrescente. 

books.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1);


console.log(books);

// 5- Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário. 

const birthAuthorXX = (array) => {
  return array.every((element) => element.author.birthYear < 2000);
}

console.log(birthAuthorXX(books));

