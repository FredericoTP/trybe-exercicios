const units4: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convertArea(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units4.indexOf(fromUnit);
  const toIndex = units4.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
}

console.log(convertArea(5, 'm²', 'km²'));