
// 1 -O formulário deverá permitir que a pessoa usuária insira os seguintes campos:
// Nome Completo: Limitado entre 10 e 40 caracteres.
// E-mail: Limitado entre 10 e 50 caracteres.
// Destino Preferido: 4 opções: Cidade, Campo, Praia, Montanhas.
// Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso TrybeTrip? Limite de 500 caracteres.
// Qual a melhor data para realizar sua viagem?
// Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe?
// Concordo que imagens das minhas férias poderão ser usadas na divulgação de concursos futuros.

// 2 - Crie um botão para enviar as informações preenchidas. Agora vamos utilizar um pouco de javascript, para isso crie o arquivo script.js e o referencie no HTML.

// 3 - Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().

// 4 - Crie um botão que limpe as informações contidas nos campos.


const buttonSubmit = document.getElementById('button-submit')

buttonSubmit.addEventListener('click', function(event) {
    event.preventDefault();
})
