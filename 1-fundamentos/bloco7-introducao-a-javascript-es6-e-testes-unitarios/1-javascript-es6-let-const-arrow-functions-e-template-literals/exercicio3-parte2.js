// 3- Crie uma página HTML que possua um contador de cliques.

const btnClick = document.getElementById('btn');
const contador = document.getElementById('contador');

btnClick.addEventListener('click', () => {
    let clickCount = parseInt(contador.innerText, 10);
    clickCount += 1;
    contador.innerText = clickCount;
})