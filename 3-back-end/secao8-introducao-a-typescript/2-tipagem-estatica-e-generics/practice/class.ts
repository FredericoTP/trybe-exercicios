class Dog {
  name: string;
  specie: string;
  age: number;

  constructor(name: string, specie: string, age: number) {
    this.name = name;
    this.specie = specie;
    this.age = age;
  }

  latir(): void {
    console.log('Au au');
  }
}

class House {
  _color: string;
  _number: number;
  _owner: string;

  constructor(color: string, number: number, owner: string) {
    this._color = color;
    this._number = number;
    this._owner = owner;
  }

  houseIs(): void {
    console.log(`O ${this._owner} tem uma casa na cor ${this._color} número ${this._number}`);
  }
}

class Flight {
  from: string;
  to: string;
  flightNumber: number;
  price: number;

  constructor(from: string, to: string, flightNumber: number, price: number) {
    this.from = from;
    this.to = to;
    this.flightNumber = flightNumber;
    this.price = price;
  }
}