const units: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convertLength(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}

console.log(convertLength(5, 'm', 'km'));