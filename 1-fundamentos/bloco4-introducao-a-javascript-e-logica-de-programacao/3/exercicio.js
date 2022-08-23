// Exercício 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let number = 10;

let factorial = 1

for (let index = number; index > 0; index -= 1) {
    factorial = index * factorial;
}

console.log(factorial);


// let numbers = [];

// let factorial = 1

// for (let index = 10; index > 0; index -= 1) {
//     numbers.push(index);
// }

// for (let index2 = 0; index2 < numbers.length; index2 += 1) {
//     if (numbers[index2 + 1] != undefined) {
//         factorial = factorial * (numbers[index2]);
//     }
    
// }

// console.log(factorial);



// Exercício 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

let reverse = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    reverse = reverse + word[index];
}

console.log(reverse);


// Exercício 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menor = array[0];

let maior = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < menor.length) {
        menor = array[index];
    }
    if (array[index].length > maior.length) {
        maior = array[index];
    }
}

console.log(menor, maior);


// Exercício 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let number = 50;

let primo = 0;

for (let index = 0; index <= number; index += 1) {
    if (index % 2 != 0 && index % 3 != 0 && index % 5 != 0 && index % 7 != 0) {
        primo = index
;    }
}

console.log(primo);


// Bônus 1 - Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let number = 5;

let geometrica = [];

for (let index = 1; index <= number; index += 1) {
    geometrica.push("*");
}

for (let index2 = 1; index2 <= number; index2 += 1) {
    console.log(geometrica);
}


// Bônus 2 - Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let number = 5;

let geometrica = [];

for (let index = 1; index <= number; index += 1) {
    geometrica.push("*")
    console.log(geometrica);
}


// Bônus 3 - Agora inverta o lado do triângulo.

let number = 5;

let geometrica = [];

for (let index = number - 1; index >= 0; index -= 1) {
    geometrica[index] = "*";
    console.log(geometrica);
}