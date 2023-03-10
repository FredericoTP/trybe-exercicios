const fs = require('fs').promises;
const path = require('path');

const ecoturismPath = path.resolve(__dirname, './files/ecoturism.json');

async function readEcoturismFile() {
  try {
    const response = await fs.readFile(ecoturismPath, 'utf-8');
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

async function writeEcoturismFile(ecoturism) {
  try {
    await fs.writeFile(ecoturismPath, ecoturism);
  } catch (error) {
    console.log(error.message);
  }
}

async function addNewLocation(object) {
  const file = await readEcoturismFile();
  file.locations.push(object);
  await writeEcoturismFile(JSON.stringify(file));
}

module.exports = {
  addNewLocation,
};