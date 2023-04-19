type Slices = 4 | 6 | 8;
type Comum = 'Calabresa' | 'Frango' | 'Pepperoni';
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo';
type Doce = 'Nutella' | 'Goiabada com Queijo' | 'Marshmallow';

interface Pizza {
  flavor: string;
  slices: Slices;
}

interface PizzaComum extends Pizza {
  flavor: Comum;
}

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana;
}

interface PizzaDoce extends Pizza {
  flavor: Doce;
  slices: 4
}

const pizza1: PizzaComum = {
  flavor: 'Calabresa',
  slices: 8
}

const pizza4: PizzaComum = {
  flavor: 'Frango',
  slices: 6
}

const pizza5: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 4
}

const pizza2: PizzaVegetariana = {
  flavor: 'Marguerita',
  slices: 6
}

const pizza6: PizzaVegetariana = {
  flavor: 'Palmito',
  slices: 8
}

const pizza3: PizzaDoce = {
  flavor: 'Nutella',
  slices: 4
}