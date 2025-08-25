import validator from 'validator';
import "index.css"

const campoDeTexto = document.querySelector('#value');
const button = document.querySelector('#button');
const seletor = document.querySelector('#option');
const textoDeSaida = document.querySelector('#answer');

button.addEventListener('click', (event) => {
  // Vamos usar o preventDefault() para evitar que, ao
  // clicar no botão, ele recarregue a página
  event.preventDefault();

  const campos = {
    cpf: validator.isTaxID(campoDeTexto.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoDeTexto.value),
    email: validator.isEmail(campoDeTexto.value),
    uuid: validator.isUUID(campoDeTexto.value, 4),
    url: validator.isURL(campoDeTexto.value),
  };

  textoDeSaida.innerHTML = `A validação retornou ${campos[seletor.value]}`;
});