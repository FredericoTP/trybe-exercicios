const fs = require('fs').promises;

async function addCharacter() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const fileContent2 = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons2 = JSON.parse(fileContent2);

  const filter = simpsons.filter((item) => item.name === 'Nelson Muntz');

  const add = [...simpsons2, filter[0]];

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(add));
}

async function main() {
  await addCharacter();
}

main();