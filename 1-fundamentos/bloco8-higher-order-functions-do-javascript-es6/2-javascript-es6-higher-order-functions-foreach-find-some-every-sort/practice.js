// forEach

// Use o método forEach chamando a callback showEmailList para apresentar os emails 

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

console.log(emailListInData.forEach(showEmailList));

// find

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista: 

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (element) => {
  if (element % 3 === 0 && element % 5 === 0) {
    return element;
  }
};

const divisible = numbers.find(findDivisibleBy3And5)

console.log(divisible);

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: 

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((element) => element.length === 5);
};

console.log(findNameWithFiveLetters());

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista: 

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

function findMusic(id) {
  return musicas.find((element) => element.id === id);
};

console.log(findMusic('31031685'));

// some

// Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false. 

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((element) => element === name);
};

console.log(hasName(names2, 'Ana'));

// every

// Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false.

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge);
};

console.log(verifyAges(people, 18));

// sort

// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente. 

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people2.sort((a, b) => a.age > b.age ? 1 : -1);

console.log(people2);

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente. 

const people3 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people3.sort((a, b) => b.age > a.age ? 1 : -1);

console.log(people3);
