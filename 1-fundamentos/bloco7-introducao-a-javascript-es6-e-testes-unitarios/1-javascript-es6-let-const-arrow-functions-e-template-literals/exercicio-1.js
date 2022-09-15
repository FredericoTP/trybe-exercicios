// 1- Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals. 
// Modifique a estrutura da função para que ela seja uma arrow function; 
// Modifique as variáveis para que respeitem o escopo onde estão declaradas; 
// Modifique as concatenações para template literals. 

const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);
testingScope(false);