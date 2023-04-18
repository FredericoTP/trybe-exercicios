import readline from 'readline-sync';

const units3: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convertCapacity(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units3.indexOf(fromUnit);
  const toIndex = units3.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(units3, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(units3, 'Escolha um número para a conversão:');

  const toUnitChoice = units3[toUnitChoiceIndex];
  const fromUnitChoice = units3[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convertCapacity(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();