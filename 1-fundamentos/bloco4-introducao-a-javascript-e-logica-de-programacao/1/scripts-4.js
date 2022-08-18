const currentHour = 14

if (currentHour >= 22) {
    console.log("Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18 && currentHour < 22) {
    console.log("Rango da noite, vamos jantar :D" );
} else if (currentHour >= 14 && currentHour < 18) {
    console.log("Vamos fazer um bolo pro café da tarde?");
} else if (currentHour >= 11 && currentHour < 14) {
    console.log("Hora do almoço!!!");
} else if (currentHour >= 4 && currentHour < 11) {
    console.log("Hmmm, cheiro de café recém passado");
} else {
    console.log("Fora do requisito")
}



let weekDay = "quarta-feira"

if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "sábado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
} else {
    console.log("Fora do requisito")
}