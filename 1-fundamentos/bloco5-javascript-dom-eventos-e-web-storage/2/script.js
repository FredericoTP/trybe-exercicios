// Parte 1

// Practice 1 - Acesse o elemento elementoOndeVoceEsta. 

let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

// Practice 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let pai = elementoOndeVoceEsta.parentElement;

pai.style.color = "Aquamarine";

// Practice 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 

let filhosDoFilho = elementoOndeVoceEsta.children;

filhosDoFilho[0].innerText = "Olá!";

// Practice 4 - Acesse o primeiroFilho a partir de pai.

let primeiroFilho = pai.children;

// Practice 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;

// Practice 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

let text = elementoOndeVoceEsta.nextSibling;

// Practice 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

let terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

// Practice 8 - Agora acesse o terceiroFilho a partir de pai.

let terceiroFilho2 = pai.children[2];


// Parte 2

// Practice 1 - Crie um irmão para elementoOndeVoceEsta. 

let irmaoParaElementoOndeVoceEsta = document.createElement("section");

irmaoParaElementoOndeVoceEsta.className = "irmao-elementoOndeVoceEsta";

elementoOndeVoceEsta.parentElement.appendChild(irmaoParaElementoOndeVoceEsta);

// Practice 2 - Crie um filho para elementoOndeVoceEsta.

let filhoElementoOndeVoceEsta = document.createElement("section");

filhoElementoOndeVoceEsta.className = "filho-elementoOndeVoceEsta";

elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Practice 3 - Crie um filho para primeiroFilhoDoFilho.

let filhoPrimeiroFilhoDoFilho = document.createElement("section");

filhoPrimeiroFilhoDoFilho.className = "filho-primeiroFilhoDoFilho";

elementoOndeVoceEsta.children[0].appendChild(filhoPrimeiroFilhoDoFilho);

// Practice 4 - A partir desse filho criado, acesse terceiroFilho.

let filhoCriado = document.getElementsByClassName("filho-primeiroFilhoDoFilho");

let terceiroFilho3 = filhoCriado[0].parentElement.parentElement.parentElement.children[2];