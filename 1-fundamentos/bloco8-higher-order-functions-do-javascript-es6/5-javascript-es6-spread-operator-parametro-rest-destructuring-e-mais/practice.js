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

