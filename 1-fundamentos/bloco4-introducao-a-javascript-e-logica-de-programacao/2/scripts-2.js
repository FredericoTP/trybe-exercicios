// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

// Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumeros = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumeros = somaNumeros + numbers[index];
}

console.log(somaNumeros);
