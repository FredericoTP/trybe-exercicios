// Parte III

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. 

const juntarObjeto = (objeto, chave, valor) => objeto[chave] = valor;

juntarObjeto(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. 

const listarKeys = (objeto) => Object.keys(objeto);

// Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = (objeto) => listarKeys(objeto).length;

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. 

const listarValues = (objeto) => Object.values(objeto);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = {};
Object.assign({}, allLessons['lesson1'] = lesson1, allLessons['lesson2'] = lesson2, allLessons['lesson3'] = lesson3);

// console.log(allLessons);

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas. 

const totalEstudantes = (objeto) => {
  const keys = Object.keys(objeto);
  let resultado = 0;
  for (let index = 0; index < keys.length; index += 1) {
    resultado += parseInt(objeto[keys[index]].numeroEstudantes);
  }
  return resultado;
}

console.log(totalEstudantes(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const valorPosição = (objeto, posição) => {
  const valores = Object.values(objeto);
  return valores[posição];
}

console.log(valorPosição(lesson2, 1));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verificaChaveValor = (objeto, chave, valor) => {
  const keys = Object.keys(objeto);
  const values = Object.values(objeto);

  for (let index = 0; index < keys.length; index += 1) {
    if (keys[index].includes(chave) && values[index].includes(valor)) {
      return true;
    }
  }

  return false;
}

console.log(verificaChaveValor(lesson1, 'professor', 'Maria Clara'));
