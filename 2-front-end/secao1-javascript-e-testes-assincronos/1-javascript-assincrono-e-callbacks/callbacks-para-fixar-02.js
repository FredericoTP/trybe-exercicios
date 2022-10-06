// No código acima você tem a função getUser modificada, que agora funciona de modo assíncrono. Adicione uma callback como parâmetro da função getUser para realizar as operações abaixo:
// A função getUser, ao ser chamada com o parâmetro userFullName, deve imprimir na tela: “Olá! Meu nome é Ivan Ivanovich” 
// A função getUser, ao ser chamada com o parâmetro userNationality, deve imprimir na tela: “Ivan é Russo” 

const userFullName = ({ firstName, lastName }) => `Olá! Meu nome é ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} é ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (/* callback */) => {
  setTimeout(() => {
    const user = {
      firstName: 'Ivan',
      lastName: 'Ivanovich',
      nationality: 'Russo',
    };

    // Dica: use esse `console.log()` abaixo para imprimir o resultado na tela.
    console.log(user);
  }, delay());
};

getUser(userFullName);
getUser(userNationality);
