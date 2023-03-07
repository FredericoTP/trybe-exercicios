function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);

  return bmi;
}

module.exports = { bmiCalculator };