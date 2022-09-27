// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula. 

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    let count = 0;
    for (let index = 0; index < curr.length; index += 1) {
      curr[index].toLowerCase() === 'a' ? count += 1 : count;
    };

    return acc + count
  }, 0);
}

// console.log(containsA());
