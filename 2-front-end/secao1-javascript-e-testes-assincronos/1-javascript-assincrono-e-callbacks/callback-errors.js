// Adicione um segundo parâmetro, que deve ser uma callback, na função getCountry; 
// Retorne essa callback na função getCountry, de forma que trate a mensagem de erro. 

const countryName = ({ name }) => console.log(`O país retornado é ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`A Moeda corrente do ${name} é ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Erro ao selecionar país: ${error}`);

const getCountry = (onSuccess, callback) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if (didOperationSucceed) {
      const country = {
        name: 'Brasil',
        hdi: 0.759,
        currency: 'Real',
      };
      onSuccess(country);
    } else {
      const errorMessage = 'País não encontrado';
      callback(errorMessage);
    }
  }, delay());
};

getCountry(countryName, printErrorMessage);
getCountry(countryCurrency, printErrorMessage);
