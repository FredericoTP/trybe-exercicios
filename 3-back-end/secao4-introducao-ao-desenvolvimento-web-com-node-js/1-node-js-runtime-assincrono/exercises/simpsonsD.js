const fs = require('fs').promises;

async function createFile() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const filter = simpsons.filter((item) => item.id === '1' || item.id === '4');

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filter));
}

async function main() {
  await createFile();
}

main();