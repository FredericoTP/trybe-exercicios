// Spread Operator

// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread. 

const specialFruit = ['Manga', 'Morango', 'Maçã'];

const additionalItens = ['Suco de laranja', 'Abacaxi', 'Kiwi', 'Banana'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));

