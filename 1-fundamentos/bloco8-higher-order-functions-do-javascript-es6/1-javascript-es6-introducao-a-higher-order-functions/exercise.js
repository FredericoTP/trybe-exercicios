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
