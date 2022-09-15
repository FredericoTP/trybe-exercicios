// 3- Crie uma página HTML que possua um contador de cliques.

const btnClick = document.getElementById('btn');
const contador = document.getElementById('contador');

btnClick.addEventListener('click', () => {
    let resultado = parseInt(contador.innerText);
    resultado += 1;
    contador.innerText = resultado;
})