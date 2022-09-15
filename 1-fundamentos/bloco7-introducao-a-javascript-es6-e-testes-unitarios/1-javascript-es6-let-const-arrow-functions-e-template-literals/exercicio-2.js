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


// 4- Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
//A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string. 
// O nome da função deverá ser minhasSkills; 
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro; 
// Declare dentro da função uma variável com o nome skills, do tipo const; 
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills. 

const substituaX = nome => {
  const frase = 'Tryber x aqui!';
  const palavras = frase.split(' ');
  let array = [];
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length === 1) {
      array.push(nome);
    } else {
      array.push(palavras[index]);
    }
  }

  return `${array[0]} ${array[1]} ${array[2]}`
}



const minhasSkills = string => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  let frase = `${string} 
  Minhas três principais habilidades são: 
  ${skills[0]} 
  ${skills[1]} 
  ${skills[2]}`;

  return frase;
}

console.log(minhasSkills(substituaX('Fred')));