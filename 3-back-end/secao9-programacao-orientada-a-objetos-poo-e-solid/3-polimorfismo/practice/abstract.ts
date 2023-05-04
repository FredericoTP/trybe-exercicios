abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MeleeCharacter extends Character {
  constructor(private _vocation: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Olá, eu sou um ${this._vocation} Uso armas de curto alcance!`);
  }

  specialMove(): void {
    console.log(`${this._vocation} utilizou ${this._specialMoveName}`);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _vocation: string, private _specialMoveName: string) {
    super();
  }

  talk(): void {
    console.log(`Olá, eu sou um ${this._vocation} Uso armas de curto alcance!`);
  }

  specialMove(): void {
    console.log(`${this._vocation} utilizou ${this._specialMoveName}`);
  }
}

const kina = new MeleeCharacter('knight', 'exori gran');
const pally = new LongRangeCharacter('paladin', 'exori gran con');

kina.talk();
kina.specialMove();
pally.talk();
pally.specialMove();