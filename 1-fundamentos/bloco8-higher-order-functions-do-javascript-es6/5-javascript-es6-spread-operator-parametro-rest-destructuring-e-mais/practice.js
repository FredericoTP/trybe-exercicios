// 1- Spread Operator

// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. 

const specialFruit = ['Manga', 'Morango', 'Maçã'];

const additionalItens = ['Suco de laranja', 'Abacaxi', 'Kiwi', 'Banana'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

// console.log(fruitSalad(specialFruit, additionalItens));

// 2- Object Destructuring

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. 
// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfos = {
  ...user,
  ...jobInfos,
}

const { name, age, nationality, profession, squad, squadInitials } = userInfos;

const apresenation = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}.`;

// console.log(apresenation);

// 3-  Array Destructuring

// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. 

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ frase, funcao ] = saudacoes;

// funcao(frase);

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis. 

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

// console.log(comida, animal, bebida);

// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares. 

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

// console.log(numerosPares);

