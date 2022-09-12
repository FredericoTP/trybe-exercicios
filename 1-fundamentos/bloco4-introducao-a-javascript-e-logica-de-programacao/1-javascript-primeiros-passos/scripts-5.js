nota = 2

let estadoAprovacao = '?';

switch (nota) {
    case 1:
        estadoAprovacao = "Aprovada";
        break;
    case 2:
        estadoAprovacao = "Lista";
        break;
    case 3:
        estadoAprovacao = "Reprovada";
        break;
    default:
        estadoAprovacao = "Não se aplica";
}

console.log(estadoAprovacao);