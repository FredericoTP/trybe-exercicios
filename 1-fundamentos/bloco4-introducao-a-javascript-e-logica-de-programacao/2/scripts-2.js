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

// Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumeros = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumeros = somaNumeros + numbers[index];
}

console.log(somaNumeros / numbers.length);

// Exercício 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumeros = 0;

for (let index = 0; index < numbers.length; index += 1) {
    somaNumeros = somaNumeros + numbers[index];
}

let media = somaNumeros / numbers.length;

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}