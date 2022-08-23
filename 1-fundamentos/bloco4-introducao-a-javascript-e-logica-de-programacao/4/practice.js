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