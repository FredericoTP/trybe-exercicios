class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void {
    console.log('Bi bi');
  }

  turnOn(): void {
    console.log('Carro ligado!');
  }

  turnOff(): void {
    console.log('Carro desligado!');
  }

  speedUp(): void {
    console.log('Acelerando');
  }

  speedDown(): void {
    console.log('Freando');
  }

  stop(): void {
    console.log('Carro parado');
  }

  turn(direction: string): void {
    console.log(`Virando para a ${direction}`);
  }
}

const car1 = new Car('volkswagen - gol', 'prata', 4);
car1.turnOn();
car1.speedUp();
car1.speedDown();
car1.turn('esquerda');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.stop();
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.turn('esquerda');
car1.speedUp();
car1.speedDown();
car1.turn('direita');
car1.speedUp();
car1.speedDown();
car1.stop();
car1.speedUp();