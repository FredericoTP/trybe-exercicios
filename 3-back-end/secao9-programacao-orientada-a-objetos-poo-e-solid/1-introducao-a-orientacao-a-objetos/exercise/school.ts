class Student {
  private _register: string;
  private _name: string;
  private _testGrade: number[];
  private _schoolWork: number[];

  constructor(r: string, n: string) {
    this._register = r;
    this._name = n;
    this._testGrade = [];
    this._schoolWork = [];
  }

  get register(): string {
    return this._register;
  }

  set register(value: string) {
    this._register = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get testGrade(): number[] {
    return this._testGrade;
  }

  set testGrade(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._testGrade = value;
  }

  get schoolWork(): number[] {
    return this._schoolWork;
  }

  set schoolWord(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }

    this._schoolWork = value;
  }
}