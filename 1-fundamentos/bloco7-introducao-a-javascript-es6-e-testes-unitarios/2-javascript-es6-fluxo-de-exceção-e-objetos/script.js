// 1- Crie erros personalizados. 
// Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo? 
// Utilize o throw new Error e o bloco try/catch. 
// Evite funções que tenham muitas responsabilidades distintas. 
// Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro. 
// Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Você pode fazer essa verificação utilizando a função isNan(). 
// Adicione o texto dos erros no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos! 
// Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
