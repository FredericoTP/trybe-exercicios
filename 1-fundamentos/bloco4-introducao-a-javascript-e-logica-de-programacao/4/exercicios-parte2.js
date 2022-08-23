// Parte 2 - Funções

// Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

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

console.log(verificaPalindromo("arara"));

// Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function highestValue(numbers) {
    let highest = numbers[0];
    let indexHighest = 0

    for (let index = 1; index < numbers.length; index += 1) {
        if (highest < numbers[index]) {
            highest = numbers[index];
            indexHighest = [index];
        }
    }

    return indexHighest;
}

console.log(highestValue([2, 3, 6, 7, 10, 1]));

// Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function lowerValue(numbers) {
    let lower = numbers[0];
    let indexLower = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        if (numbers[index] < lower) {
            lower = numbers[index];
            indexLower = [index];
        }
    }

    return indexLower;
}

console.log(lowerValue([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName(names) {
    let biggest = names[0];

    for (let indice in names) {
      if (biggest.length < names[indice].length) {
        biggest = names[indice];
      }
    }
  
    return biggest;
}

console.log(biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let numbers = [2, 3, 2, 5, 8, 2, 3];

function repeatedNumbers(numbers) {
    let num = 0;
    let count = 0;
    let count2 = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        num = numbers[index];
        for (let index2 = 0; index2 < numbers.length; index2 += 1) {
            if (numbers[index2] === num) {
                count2 +=1;
            }
        }
    }

    return count2;
}
console.log(repeatedNumbers(numbers));