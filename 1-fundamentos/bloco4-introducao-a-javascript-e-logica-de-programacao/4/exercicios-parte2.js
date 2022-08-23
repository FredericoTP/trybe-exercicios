// Parte 2 - Funções

// Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = "arara";

function verificaPalindromo(word) {
    let reverse = "";

    for (let index = word.length - 1; index >= 0; index -= 1) {
        reverse += word[index];
    };
    
    if (word === reverse) {
        return true;
    } else {
        return false;
    };
}

console.log(verificaPalindromo(word));

// Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numbers = [15, 2 ,20 , 11, 70, 53, 21];

function highestValue(numbers) {
    let highest = numbers[0];

    for (let index = 0; index < numbers.length; index += 1) {
        if (highest < numbers[index]) {
            highest = numbers[index];
        }
    }

    return highest
}

console.log(highestValue(numbers));

