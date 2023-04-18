import readline from 'readline-sync';

const units2: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units2.indexOf(fromUnit);
  const toIndex = units2.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(units2, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(units2, 'Escolha um número para a conversão:');

  const toUnitChoice = units2[toUnitChoiceIndex];
  const fromUnitChoice = units2[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convertMass(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();