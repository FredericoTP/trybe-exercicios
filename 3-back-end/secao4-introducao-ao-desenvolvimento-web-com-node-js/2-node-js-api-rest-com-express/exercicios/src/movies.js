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

async function editMovie(object, id) {
  const { movie, price } = object;
  const movies = await readMovies();

  const findMovie = movies.find((item) => item.id === Number(id));

  findMovie.movie = movie;
  findMovie.price = price;

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  return findMovie;
}

async function removeMovie(id) {
  const movies = await readMovies();

  const position = movies.findIndex((item) => item.id === Number(id));

  movies.splice(position, 1);

  await fs.writeFile(moviesPath, JSON.stringify(movies));

  return movies;
}

module.exports = {
  readMovies,
  addMovie,
  editMovie,
  removeMovie,
};
