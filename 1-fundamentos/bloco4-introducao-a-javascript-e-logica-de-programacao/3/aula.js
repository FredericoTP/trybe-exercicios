// Exercício 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:

A soma total de 1 a 50 é:
const number = 50;
let resultado = 0;

for (let index = 1; index <= number; index += 1) {
    resultado += index;
}

console.log("A soma total de 1 a 50 é:" + resultado);

// Exercício 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let numbers = 150;

let quantidade = 0;

for (let index = 2; index <= 150; index += 1) {
    if (numbers % 3 === 0) {
        quantidade += 1
    } 
}

console.log(quantidade >= 50? "Mensagem secreta":quantidade);

// Exercício 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato: "Player 1 won" ou "A Ties" ou "Player 2 won".

let player1 = 'papel';

let player2 = 'papel';

if (player1 === "pedra" && player2 === 'tesoura' || player1 === "papel" && player2 === 'pedra' || player1 === "tesoura" && player2 === 'papel')  {
    console.log("Player 1 won");
} else if (player1 === player2)  {
    console.log("A Ties");
} else {
    console.log("Player 2 won");
}

// Exercício 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o exemplo: "A pessoa é maior de idade". Bônus: Crie a condição utilizando operador ternário.

let idade = 18;

console.log(idade >= 18? "A pessoa é maior de idade":"A pessoa é menor de idade")

// Exercício 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.

let carolzita = 17;

let murilo = 15;

let baeta = 25;

console.log(carolzita < murilo && carolzita < baeta? "Carolzita é a mais nova":murilo < carolzita && murilo < baeta? "Murilo é a mais novo":baeta < carolzita && baeta < murilo? "Baeta é a mais nova":"")