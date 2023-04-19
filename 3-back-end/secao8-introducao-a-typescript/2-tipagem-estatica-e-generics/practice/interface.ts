interface Car {
  model: string;
  color: string;
  year: number;
}

const car: Car = {
  model: 'Uno',
  color: 'Black',
  year: 2013
}

interface Cat {
  specie: string;
  name: string;
  year: number;
}

const cat: Cat = {
  specie: 'vira-lata',
  name: 'Laranja',
  year: 3
}

interface Airplane {
  model: string;
  color: string;
  year: number;
  flights: number;
}

const airplane: Airplane = {
  model: 'Boing',
  color: 'White',
  year: 2013,
  flights: 16
}