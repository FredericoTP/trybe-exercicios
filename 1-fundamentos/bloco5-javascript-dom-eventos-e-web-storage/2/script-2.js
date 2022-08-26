// Exercício 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body; 

let body = document.getElementsByTagName("body");

let createH1 = document.createElement("h1");

body[0].appendChild(createH1);

createH1.innerText = "Exercício 5.2 - JavaScript DOM";

// Exercício 2 - Adicione a tag main com a classe main-content como filho da tag body;

let createMain = document.createElement("main");

createMain.className = "main-content";

body[0].appendChild(createMain);

// Exercício 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2; 

let createSectionMain = document.createElement("section");

createSectionMain.className = "center-content";

let main = document.getElementsByClassName("main-content");

main[0].appendChild(createSectionMain);

// Exercício 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

let createP = document.createElement("p");

main[0].children[0].appendChild(createP);

let pMain = document.querySelector(".main-content .center-content p");

pMain.innerText = "Aprendendo a criar o HTML utilizando o JavaScript";

// Exercício 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

let createSection2Main = document.createElement("section");

createSection2Main.className = "left-content";

main[0].appendChild(createSection2Main);

// Exercício 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

let createSection3Main = document.createElement("section");

createSection3Main.className = "right-content";

main[0].appendChild(createSection3Main);

// Exercício 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5; 

let sectionLeft = document.getElementsByClassName("left-content");

let createImage = document.createElement("img");

createImage.className = "small-image";

createImage.src = "https://picsum.photos/200";

sectionLeft[0].appendChild(createImage);

// Exercício 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let list = ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"];

let sectionRight = document.getElementsByClassName("right-content");

let createUl = document.createElement("ul");

sectionRight[0].appendChild(createUl);

let ulRight = document.getElementsByTagName("ul");

for (let index = 0; index < list.length; index += 1) {
    let createLi = document.createElement("li");
    createLi.innerText = list[index];
    ulRight[0].appendChild(createLi);
}

// exercício 9 - Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

function createElementInMain(tag) {
    let createH3 = document.createElement(tag);
    main[0].appendChild(createH3);
}

createElementInMain("h3");
createElementInMain("h3");
createElementInMain("h3");