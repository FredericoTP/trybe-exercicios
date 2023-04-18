import readline from 'readline-sync';

const units5: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units5.indexOf(fromUnit);
  const toIndex = units5.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(units5, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(units5, 'Escolha um número para a conversão:');

  const toUnitChoice = units5[toUnitChoiceIndex];
  const fromUnitChoice = units5[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = convertVolume(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();