// Objeto

// Exercício 1 - Crie um objeto player contendo as variáveis listadas abaixo

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

console.log(person);

// Exercício 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

console.log("A jogadora " + person.name + " " + person.lastName + " tem " + person.age + " anos de idade.");

// Exercício 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

person["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(person);

// Exercício 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

person["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogador " + person.name + " " + person.lastName + " foi eleita a melhor do mundo por " + person.bestInTheWorld["length"] + " vezes.");

// Exercício 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

let person = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

console.log("A jogadora possui " + person.medals.golden + " medalhas de ouro e " + person.medals.silver + " medalhas de prata.");

// for/in e for/of

// Exercício 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    console.log("Olá " + names[index]);
}

// Exercício 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for ( let index in car) {
    console.log(index, car[index]);
}

// Function

//Exercício 1

function adicao(number1, number2) {
    return number1 + number2;
};

function subtracao(number1, number2) {
    return number1 - number2;
};

function multiplicacao(number1, number2) {
    return number1 * number2;
};

function divisao(number1, number2) {
    return number1 / number2;
};

function modulo(number1, number2) {
    return number1 % number2;
}

console.log(adicao(15, 3), subtracao(15, 3), multiplicacao(15, 3), divisao(15, 3), modulo(15, 3));

// Exercício 2

function maiorNumero(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

console.log(maiorNumero(0, 11));

// Exercício 3

function maiorNumero(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        return number1;
    } else if (number2 > number1 && number2 > number3) {
        return number2;
    } else {
        return number3;
    }
}

console.log(maiorNumero(19, 13, 15));

// Exercício 4

function number(number) {
    if (number > 0) {
        return "positive";
    } else if (number < 0) {
        return "negative";
    } else {
        return "zero";
    }
}

console.log(number(6));

// Exercício 5

function triangle(angle1, angle2, angle3) {
    let sumAnle = angle1 + angle2 + angle3;

    let positiveAngle = angle1 > 0 && angle2 > 0 && angle3 > 0;

    if (positiveAngle) {
        if (sumAnle === 180) {
            return "true";
        } else {
            return "false";
        };
    } else {
        return "erro";
    }
}

console.log(triangle(170, 5, 5));