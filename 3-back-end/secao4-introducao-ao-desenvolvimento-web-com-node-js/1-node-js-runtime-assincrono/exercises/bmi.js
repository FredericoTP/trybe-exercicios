const readline = require('readline-sync');

const weight = readline.questionFloat('What’s your weight? (kg)');
const height = readline.question('What’s your height? (m)');

function bmiCalculator() {
  const bmi = (weight / (height * height)).toFixed(2);

  switch (true) {
    case bmi < 18.5:
      console.log(`Bmi: ${bmi}! Abaixo do peso (magreza).`);
      break;
    case bmi <= 24.9:
      console.log(`Bmi: ${bmi}! Peso normal.`);
      break;
    case bmi <= 29.9:
      console.log(`Bmi: ${bmi}! Acima do peso (sobrepeso).`);
      break;
    case bmi <= 34.9:
      console.log(`Bmi: ${bmi}! Obesidade grau I.`);
      break;
    case bmi <= 39.9:
      console.log(`Bmi: ${bmi}! Obesidade grau II.`);
      break;
    default:
      console.log(`Bmi: ${bmi}! Obesidade graus III e IV.`);
      break;
  }
}

bmiCalculator();

module.exports = { bmiCalculator };