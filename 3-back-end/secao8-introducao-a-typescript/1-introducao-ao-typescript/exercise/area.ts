import readline from 'readline-sync';

const units4: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units4.indexOf(fromUnit);
  const toIndex = units4.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(units4, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(units4, 'Escolha um número para a conversão:');

  const toUnitChoice = units4[toUnitChoiceIndex];
  const fromUnitChoice = units4[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convertArea(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();