const fs = require('fs').promises;

async function showCharacter() {
  try {
    const response = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(response);
    data.forEach((item) => console.log(`${item.id} - ${item.name}`));
  } catch (erro) {
    console.log(erro.message);
  }
}

showCharacter();
