function bmiCalculator(weight, height) {
  const bmi = weight / (height * height);
  console.log(bmi);

  return bmi;
}

bmiCalculator(70, 1.74);

module.exports = { bmiCalculator };