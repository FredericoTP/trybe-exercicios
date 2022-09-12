let a = 170

let b = 5

let c = 5

let somaAngulo = a + b + c

let anguloPositivo = a > 0 && b > 0 && c > 0;

if (anguloPositivo) {
    if (somaAngulo === 180) {
        console.log("true");
    } else {
        console.log("false");
    };
} else {
    console.log("erro");
}