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

async function writeCacauTrybeFile(chocolates) {
  const cacauTrybePath = path.resolve(__dirname, './files/cacauTrybeFile.json');

  try {
    await fs.writeFile(cacauTrybePath, JSON.stringify(chocolates));
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

async function getChocolatesByName(name) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolatesByName = cacauTrybe.chocolates
  .filter((item) => item.name.toLowerCase().includes(name));

  return chocolatesByName;
}

async function updateChocolateById(id, body) {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateToUpdate = cacauTrybe.chocolates.find((item) => item.id === id);

  if (chocolateToUpdate) {
    cacauTrybe.chocolates = cacauTrybe.chocolates.map((chocolate) => {
      if (chocolate.id === id) return { ...chocolate, ...body };
      return chocolate;
    });

    await writeCacauTrybeFile(cacauTrybe);
    return { ...chocolateToUpdate, ...body };
  }

  return false;
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getTotalChocolates,
  getChocolatesByName,
  updateChocolateById,
};