type Bird = {
  name: string;
  specie: string;
}

function birdName(bird: Bird) {
  console.log(`O pássaro ${bird.name} é da espécie ${bird.specie}`);
}

type NumberObj = {
  num1: number;
  num2: number;
}

function sum(numbers: NumberObj) {
  return numbers.num1 + numbers.num2;
}

type Address = {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const personAddress: Address = {
  rua: 'Bla bla',
  numero: 65,
  bairro: 'Xablau',
  cidade: 'BH'
}