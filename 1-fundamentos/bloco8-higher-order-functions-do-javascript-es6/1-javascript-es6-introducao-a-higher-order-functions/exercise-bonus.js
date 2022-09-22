const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Parte I

// Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). 

const dragonDamage = (dragon) => {
  const dragonStrength = dragon.strength;

  return Math.floor(Math.random() * (dragonStrength - 15)) + 15;
};

// Crie uma função que retorna o dano causado pelo warrior. O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). 

const warriorDamage = (warrior) => {
  const warriorStrength = warrior.strength;
  const warriorWeaponDmg = warrior.weaponDmg;

  return Math.floor(Math.random() * (warriorStrength * warriorWeaponDmg - warriorStrength)) + warriorStrength;
};

// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno. 
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo). 
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”) e a mana gasta é 0. 

const mageDamage = (mage) => {
  const mageIntelligence = mage.intelligence;
  const mageMana = mage.mana;

  if (mageMana >= 15) {
    return { damage: Math.floor(Math.random() * (mageIntelligence * 2 - mageIntelligence)) + mageIntelligence, mana: mageMana - 15 };
  }

  return { damage: 0, mana: 'Não possui mana suficiente!' };
};

// Parte II

// Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor da chave damage do warrior.

// Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disso, ela também deve atualizar o valor das chaves damage e mana do mage.

// Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Essa HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disso, ela também deve atualizar o valor da chave damage do monstro.

const gameActions = {
  warriorTurn: (dmg) => {
    const warriorDmg = dmg(warrior);
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  mageTurn: (dmg) => {
    const mageDmg = Object.values(dmg(mage))[0];
    const manaSpent = Object.values(dmg(mage))[1];
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    mage.mana = manaSpent;
  },
  dragonTurn: (dmg) => {
    const dragonDmg = dmg(dragon);
    warrior.healthPoints -= dragonDmg;
    mage.healthPoints -= dragonDmg;
    dragon.damage = 2 * dragonDmg;
  },
  turn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turn());
