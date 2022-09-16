// Bônus

const allLessons = {
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'noite'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
};

// Utilizando o objeto (allLesson), Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. 

const alunosMatematica = (objeto) => {
  const keys = Object.keys(objeto);
  let resultado = 0;

  for (let index = 0; index < keys.length; index += 1) {
    let keys2 = objeto[keys[index]];
    if (keys2.materia === 'Matemática') {
      resultado += parseInt(keys2.numeroEstudantes);
    }
  }

  return resultado;
}

// console.log(alunosMatematica(allLessons));

// Utilizando o objeto (allLesson), Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. 

const relatorioAulaEstudantes = (objeto, prof) => {
  const keys = Object.keys(objeto);
  const materia = []
  let alunos = 0;

  for (let index = 0; index < keys.length; index += 1) {
    let keys2 = objeto[keys[index]];
    if (keys2.professor === prof) {
      materia.push(keys2.materia)
      alunos += parseInt(keys2.numeroEstudantes);
    }
    // console.log(keys2);
  }

  return {aulas: materia, estudantes: alunos};
}

const relatorioProf = (object, prof) => {
  const relatorio = {};
  relatorio.professor = prof
  Object.assign(relatorio, relatorioAulaEstudantes(object, prof));

  return relatorio;
}

console.log(relatorioProf(allLessons, 'Maria Clara'));