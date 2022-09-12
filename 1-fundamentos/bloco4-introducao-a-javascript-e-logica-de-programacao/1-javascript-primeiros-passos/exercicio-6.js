let movimentoPeca = "REI"

switch (movimentoPeca.toLocaleLowerCase()) {
    case "bispo":
        movimentoPeca = "diagonal";
        break;
    case "rei":
        movimentoPeca = "qualquer direção 1 casa";
        break;
    case "dama":
        movimentoPeca = "qualquer direção mais de 1 casa";
        break;
    case "torre":
        movimentoPeca = "linha reta";
        break;
    case "cavalo":
        movimentoPeca = "L";
        break;
    case "peao":
        movimentoPeca = "frente";
    default:
        movimentoPeca = "erro";
}

console.log(movimentoPeca);

