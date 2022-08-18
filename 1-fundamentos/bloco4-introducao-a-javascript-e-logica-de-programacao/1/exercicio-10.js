const valorCusto = 5;

const valorVenda = 20;

const valorTotal = valorCusto + 0.2 * valorCusto;

const lucro = (valorVenda - valorTotal) * 1000;

if (valorVenda >= 0 && valorCusto >= 0) {
    console.log(lucro);
} else {
    console.log("erro");
}