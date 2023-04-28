class Superclass {
  constructor(public isSuper: boolean = true) { }

  sayHello() {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {

}

function myFunc(object: Superclass) {
  object.sayHello();
}

const objeto1 = new Superclass();
const objeto2 = new Subclass();

myFunc(objeto1);
myFunc(objeto2);