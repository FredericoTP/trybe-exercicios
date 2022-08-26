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

