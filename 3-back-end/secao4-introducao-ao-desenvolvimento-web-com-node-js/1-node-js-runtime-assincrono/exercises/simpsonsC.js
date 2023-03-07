const fs = require('fs').promises;

async function removeCharacter() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const remove = simpsons.filter((item) => item.id !== '10' && item.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(remove));
}

async function main() {
  await removeCharacter();
}

main();