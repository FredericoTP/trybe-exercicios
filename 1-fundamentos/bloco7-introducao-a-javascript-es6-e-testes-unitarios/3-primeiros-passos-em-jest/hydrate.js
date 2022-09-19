const hydrate = (frase) => {
  const numbers = frase.replace(/[^0-9]/g,'');
  const arrayNumbers = numbers.split('');
  let resultado = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    resultado += parseInt(arrayNumbers[index]);
  }

  if (resultado === 1) {
    return '1 copo de água'
  } else {
    return `${resultado} copos de água`
  }
}

module.exports = hydrate;
