interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `A soma é ${this.myNumber + myParam}`;
  }
}

const objeto = new MyClass(5);

objeto.myFunc(7);