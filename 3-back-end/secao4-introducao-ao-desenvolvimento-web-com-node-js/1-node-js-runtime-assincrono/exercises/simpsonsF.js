const fs = require('fs').promises;

async function changeChracter() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsWithMaggie));
}

async function main() {
  await changeChracter();
}

main();