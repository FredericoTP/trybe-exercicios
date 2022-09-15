// 1- Crie uma função que receba um número e retorne seu fatorial.
// Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta). 
// Dentro da função crie uma variável result, que será o retorno final da função. 
// Crie a lógica para retornar o fatorial de N!. 
// Imprima no terminal “Esse é o fatorial resultado da função“ (Lembre-se de utilizar template literals nesse momento). 
// Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator. 

const factorial = number => {
  let result = number;
  for (let index = number - 1; index > 0; index -= 1) {
    result *= index;
  }
  return `Esse é o fatorial ${result}`;
}

console.log(factorial(5));


const factorial = number => number > 1 ? number * factorial(number - 1) : 1;

console.log(`Esse é o fatorial ${factorial(5)}`);

// 2- Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

const maiorPalavra = frase => {
  const array = frase.split(' ');
  let contador = 0;
  let palavra;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > contador) {
      contador = array[index].length;
      palavra = array[index];
    }
  }
  return palavra;
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));

const maiorPalavra = frase => {
  let array = frase.split(' ');
  array.sort((a, b) => a - b);

  return array[array.length - 1];
}

console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'));
