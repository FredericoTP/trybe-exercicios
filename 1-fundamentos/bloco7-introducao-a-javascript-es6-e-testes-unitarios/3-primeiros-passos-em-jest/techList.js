// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array a função cria, em ordem alfabética, um objeto.
// Implemente a função techList a partir dos testes.

const techList = (array, name) => {
  if (array.length === 0) {
    return 'Vazio!';
  }

  arraySort = array.sort();
  const tech = [];
  for (let index = 0; index < arraySort.length; index += 1) {
    const object = {};
    object['tech'] = arraySort[index];
    object['name'] = name;
    tech.push(object);
  }

  return tech;
}

module.exports = techList;
