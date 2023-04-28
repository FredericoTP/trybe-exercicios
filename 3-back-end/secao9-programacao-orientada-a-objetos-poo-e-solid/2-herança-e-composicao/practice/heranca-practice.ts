class Superclass {
  constructor(public isSuper: boolean = true) { }

  protected sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  sayHello2() {
    this.sayHello();
  }
}

function myFunc(object: Subclass) {
  object.sayHello2();
}

// const objeto1 = new Superclass();
const objeto2 = new Subclass();

// myFunc(objeto1);
myFunc(objeto2);