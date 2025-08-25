// função que gera número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// cria uma promise que será sempre resolvida
const generateResolvedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise resolvida em ${timer / 1000} segundo(s)`);
      resolve(
        `O número ${randomNumber} foi gerado em ${timer / 1000} segundo(s)`
      );
    }, timer);
  });

// cria uma promise que será sempre rejeitada
const generateRejectedPromise = (timer) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      console.log(`Promise rejeitada em ${timer / 1000} segundo(s)`);
      reject(
        new Error(
          `O número ${randomNumber} é inválido. Promise rejeitada em ${
            timer / 1000
          } segundo(s)`
        )
      );
    }, timer);
  });

Promise.all([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

Promise.all([
  generateResolvedPromise(1000),
  generateResolvedPromise(3000),
  generateRejectedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

// Retorna a primeira promise resolvida
Promise.race([
  generateResolvedPromise(3000),
  generateResolvedPromise(1000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

// Retorna uma promise resolvida com o valor retornado pela primeira promise original, ignorando qualquer outra promise que tenha sido finalizada primeiro como rejeitada.
Promise.any([
  generateResolvedPromise(3000),
  generateRejectedPromise(1000),
  generateResolvedPromise(2000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.message));

// Retorna uma única promise que é resolvida quando todas as promises passadas forem finalizadas.
Promise.allSettled([
  generateResolvedPromise(3000),
  generateRejectedPromise(2000),
  generateResolvedPromise(1000),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error.errors));