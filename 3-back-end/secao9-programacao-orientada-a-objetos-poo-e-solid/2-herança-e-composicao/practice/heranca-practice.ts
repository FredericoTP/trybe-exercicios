class Superclass {
  constructor(public isSuper: boolean = true) { }

  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor(isSuper: boolean = false) {
    super(isSuper);
  }

  sayHello2(): void {
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