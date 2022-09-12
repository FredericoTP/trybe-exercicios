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

function repeatedNumbers(numbers) {
    let indice = 0;
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
        if (count2 > count) {
            count = count2;
            indice = numbers[index];

        }
        count2 = 0;

    }

    return indice;
}
console.log(repeatedNumbers([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumNumber(number) {
    let sum = 0;

    if (number > 0) {
        for (let index = number; index > 0; index -= 1) {
            sum += index;
        }
    } else {
        return "erro";
    }

    return sum;
}

console.log(sumNumber(5));

// Exercício 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word1, word2) {

    let final = [];

    let final2 = [];


    if (word1.length > word2.length) {
        for (let index = word1.length - 1; index >= (word1.length - word2.length); index -= 1) {
            final.push(word1[index]);
        }
    
        for (let index2 = word2.length - 1; index2 >= 0; index2 -= 1) {
            final2.push(word2[index2]);
        }
    
        if (JSON.stringify(final) === JSON.stringify(final2)) {
            return true;
        }
    
        return false;
    } 
    
    return "erro";
}

console.log(verificaFimPalavra("trybe", "be"));