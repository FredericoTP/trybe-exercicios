// 1- Faça uma função que some todos os números pares do array.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumEven = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

console.log(sumEven);

