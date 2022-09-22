// 1- Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const pessoaContratada = (nome) => {
  const nomeSplit = nome.split(' ');
  const emailPessoa = nomeSplit.join('_');
  return { nomeCompleto: nome, email: `${emailPessoa.toLowerCase()}@trybe.com`};
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'),
    id2: func('Luiza Drumond'),
    id3: func('Carla Paiva'),
  }

  return employees;
};

console.log(newEmployees(pessoaContratada));

// 2- Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).

const numberCheck = (number1, number2) => {
  if (number1 === number2) {
    return 'Parabéns você ganhou!';
  }

  return 'Tente novamente!';
}

const lotery = (number, func) => {
  const numberRandom = Math.floor(Math.random() * 5 + 1);
  const check = func(number, numberRandom);

  return check;
};

console.log(lotery(3, numberCheck));

// 3- Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (soluções); 
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante; 
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios: 
// Uma resposta correta adiciona 1 ponto à pontuação final; 
// A ausência de uma resposta não altera a pontuação (quando for “N.A”); 
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto. 
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (array1, array2) => {
  let result = 0;

  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] === array2[index]) {
      result += 1;
    } else if (array1[index] !== array2[index] && array2[index] !== 'N.A') {
      result -= 0.5;
    }
  }

  return result;
};

const points = (answers1, answers2, func) => func(answers1, answers2);

console.log(points(rightAnswers, studentAnswers, compareAnswers));
