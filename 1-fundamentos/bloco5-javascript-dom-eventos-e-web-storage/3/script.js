function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Exercício 1 - Crie um calendário dinamicamente. O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>. 
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function daysOfNovember() {
    let listDays = document.getElementById("days");

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let days = decemberDaysList[index];
        let dayLi = document.createElement("li");
        dayLi.innerText = days;
        listDays.appendChild(dayLi);
    }

    let novemberDay = document.querySelectorAll("#days li");

    for (let index2 = 0; index2 < novemberDay.length; index2 += 1) {
        if (novemberDay[index2].innerText == 24 || novemberDay[index2].innerText == 31) {
            novemberDay[index2].className = "day holiday";
        } else if (novemberDay[index2].innerText == 4 || novemberDay[index2].innerText == 11 || novemberDay[index2].innerText == 18) {
            novemberDay[index2].className = "day friday";
        } else if (novemberDay[index2].innerText == 25) {
            novemberDay[index2].className = "day holiday friday";
        } else novemberDay[index2].className = "day";
    }
}

daysOfNovember();

// Exercício 2 - Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
//   Sua função deve receber um parâmetro com a string 'Feriados'
//   Adicione a este botão a ID "btn-holiday"
//   Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

function createButtonHoliday(string) {
    const divButtons = document.querySelectorAll(".buttons-container");
    const button = document.createElement("button");
    button.innerText = string;
    button.id = "btn-holiday";
    divButtons[0].appendChild(button);

}

createButtonHoliday("Feriados");

// Exercício 3 - Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
//   Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
//   É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".

const buttonHoliday = document.querySelector("#btn-holiday");

function clickHolidayButton() {
    let holiday = document.getElementsByClassName("holiday");
    let color = "aquamarine";

    for (let index = 0; index < holiday.length; index += 1) {
        if (holiday[index].style.backgroundColor == color) {
            holiday[index].style.backgroundColor = "rgb(238,238,238)";
        } else {
            holiday[index].style.backgroundColor = "aquamarine";
        }
    }
}

buttonHoliday.addEventListener("click", clickHolidayButton);

// Exercício 4 - Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
//   Adicione a esse botão o ID "btn-friday";
//   Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". 

function createButtonFriday(string) {
    const divButtons = document.querySelectorAll(".buttons-container");
    const button = document.createElement("button");
    button.innerText = string;
    button.id = "btn-friday";
    divButtons[0].appendChild(button);
}

createButtonFriday("Sexta-feira");

// Exercício 5 - Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
//   É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias. 

const buttonFriday = document.querySelector("#btn-friday");

function clickFridayButton() {
    let friday = document.getElementsByClassName("friday");
    let text = "Sextou!!!";
    let friday2 = [4, 11, 18, 25];

    for (let index = 0; index < friday.length; index += 1) {
        if (friday[index].innerText === text) {
            friday[index].innerText = friday2[index];
        } else {
            friday[index].innerText = "Sextou!!!";
        }
    }
}

buttonFriday.addEventListener("click", clickFridayButton);

// Exercício 6 - Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. 
// Dica - Propriedade: event.target.

const ulList = document.getElementById("days");

function zoomDay(event) {
    event.target.style.fontSize = '40px';
}

ulList.addEventListener("mouseover", zoomDay);

function returnDay(event) {
    event.target.style.fontSize = '20px';
}

ulList.addEventListener("mouseout", returnDay);