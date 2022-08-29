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

let listDays = document.getElementById("days");

for (let index = 0; index < decemberDaysList.length; index += 1) {
    let days = decemberDaysList[index];
    let dayLi = document.createElement("li");
    dayLi.innerText = days;
    listDays.appendChild(dayLi);
}

let novemberDay = document.querySelectorAll("#days li");

for (let index2 = 0; index2 < novemberDay.length; index2 += 1) {
    novemberDay[index2].className = "day";
    if (novemberDay[index2].innerText == 24 || novemberDay[index2].innerText == 31) {
        novemberDay[index2].className = "day holiday";
    } else if (novemberDay[index2].innerText == 4 || novemberDay[index2].innerText == 11 || novemberDay[index2].innerText == 18) {
        novemberDay[index2].className = "day friday";
    } else if (novemberDay[index2].innerText == 25) {
        novemberDay[index2].className = "day holiday friday";
    }
}

