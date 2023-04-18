const units2: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertMass(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units2.indexOf(fromUnit);
  const toIndex = units2.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

console.log(convertMass(5, 'g', 'kg'));