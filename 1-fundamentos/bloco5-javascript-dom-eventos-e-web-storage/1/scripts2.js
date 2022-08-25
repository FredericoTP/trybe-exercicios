/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// Exercício 1

function changeText(text) {
    document.getElementsByTagName("p")[1].innerText = text;
}

changeText("Olá, eu sou o Fred e espero ter adquirido bastante conhecimento durante esses dois anos.");

// Exercício 2

function changeBackColor(color) {
    document.getElementsByClassName("main-content")[0].style.backgroundColor = color;
}

changeBackColor("rgb(76,164,109");

// Exercício 3

function changeBackColor2(color) {
    document.getElementsByClassName("center-content")[0].style.backgroundColor = color;
}

changeBackColor2("White");

// Exercício 4

function changeTitle(text) {
    document.getElementsByClassName("title")[0].innerText = text;
}

changeTitle("Exercício 5.1 - JavaScript");