// você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const object = students.map((student, index) => ({
    name: student,
    average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
  }))

  return object;
}

// console.log(studentAverage());

module.exports = {studentAverage};
