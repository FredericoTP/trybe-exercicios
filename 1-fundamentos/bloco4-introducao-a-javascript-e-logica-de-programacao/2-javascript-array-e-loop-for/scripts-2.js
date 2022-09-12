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

// Exercício 5

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0]

for (let index = 1; index < numbers.length; index += 1) {
    numbers[index];
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }
}

console.log(maiorNumero);

// Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let totalImpares = 0

for (let index = 0; index < numbers.length; index += 1) {
    numbers[index];
    if (numbers[index] % 2 === 1) {
        totalImpares = totalImpares + 1;
    }
}

if (totalImpares === 0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log(totalImpares);
}

// Exercício 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorValor = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    numbers[index];
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);

// Exercício 8

let numeros = [];

for (let index = 0; index < 25; index +=1) {
    numeros.push(index + 1)
}

console.log(numeros);

// Exercício 9

let numeros = [];

for (let index = 0; index < 25; index += 1) {
    numeros.push(index + 1)
}

let numerosDivididos = [];

for (let index2 = 0; index2 < numeros.length; index2 += 1) {
    numerosDivididos.push(numeros[index2] / 2);
}

console.log(numerosDivididos);

// Bônus - Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers);

// Bônus - Exercício 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers);

//Bônus - Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicado = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index < numbers.length -1) {
        multiplicado.push(numbers[index] * numbers[index + 1]);
    } else {
        multiplicado.push(numbers[index] * 2);
    }
}

console.log(multiplicado);