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
