const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

async function readMovies() {
  try {
    const response = await fs.readFile(moviesPath, 'utf-8');
    const movies = JSON.parse(response);
    return movies;
  } catch (erro) {
    console.log(erro.message);
  }
}

module.exports = {
  readMovies,
};
