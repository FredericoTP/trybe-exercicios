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

async function addMovie(object) {
  const { movie, price } = object;
  const movies = await readMovies();

  const newMovie = { id: Date.now(), movie, price };
  movies.push(newMovie);

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  return movies;
}

module.exports = {
  readMovies,
  addMovie,
};
