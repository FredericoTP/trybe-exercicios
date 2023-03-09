const fs = require('fs').promises;
const path = require('path');

async function readCacauTrybeFile() {
  const cacauTrybePath = path.resolve(__dirname, './files/cacauTrybeFile.json');

  try {
    const response = await fs.readFile(cacauTrybePath, 'utf-8');
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function getAllChocolates() {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
}

async function getChocolateById(id) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateById = cacauTrybe.chocolates.find((item) => item.id === id);

  return chocolateById;
}

async function getChocolatesByBrand(brandId) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolatesByBrand = cacauTrybe.chocolates.filter((item) => item.brandId === brandId);

  return chocolatesByBrand;
}

async function getTotalChocolates() {
  const cacauTrybe = await readCacauTrybeFile();
  const totalChocolates = cacauTrybe.chocolates.length;

  return totalChocolates;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
};