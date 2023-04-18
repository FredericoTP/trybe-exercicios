const units5: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units5.indexOf(fromUnit);
  const toIndex = units5.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

console.log(convertVolume(5, 'm³', 'km³'));