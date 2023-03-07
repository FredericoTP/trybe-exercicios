const readline = require('readline-sync');

const weight = readline.questionFloat('What’s your weight? (kg)');
const height = readline.question('What’s your height? (m)');

function bmiCalculator() {
  const bmi = weight / (height * height);
  console.log(bmi);

  return bmi;
}

bmiCalculator();

module.exports = { bmiCalculator };