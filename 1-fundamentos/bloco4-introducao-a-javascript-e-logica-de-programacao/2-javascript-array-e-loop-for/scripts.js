// Exercício 1 - Arrays (listas)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercício 2 - Arrays (listas)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

// Exercício 3 - Arrays (listas)

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push("Contato")

console.log(menu);

// Exercício 1 - For

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

// Exercício 1 - For/of

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
    console.log(name);
}
