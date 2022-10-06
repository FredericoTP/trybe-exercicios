// Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:
// A função sendMarsTemperature receba uma callback; 
// A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) => console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) => console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

const sendMarsTemperature = (callback) => setTimeout(() => callback(getMarsTemperature()), messageDelay());

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
