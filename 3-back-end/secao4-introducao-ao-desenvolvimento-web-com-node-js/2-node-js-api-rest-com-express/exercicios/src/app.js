const express = require('express');
const { readMovies, addMovie, editMovie, removeMovie, findMovieByquery } = require('./movies');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movieById = movies.filter((item) => item.id === Number(id));

  if (movieById.length === 0) return res.status(404).json({ message: 'Movie not found' });

  return res.status(200).json(movieById);
});

app.get('/movies', async (_req, res) => {
  const movies = await readMovies();

  if (!movies) return res.status(500).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json(movies);
});

app.post('/movies', async (req, res) => {
  const object = req.body;
  const movies = await addMovie((object));

  if (!movies) return res.status(500).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json(movies);
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const object = req.body;

  const movies = await editMovie(object, id);

  if (!movies) return res.status(500).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json(movies);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;

  const delMovie = removeMovie(id);

  console.log(delMovie);

  if (!delMovie) return res.status(500).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(204).end();
});

app.get('/movies/search', (req, res) => {
  const { q } = req.query;

  const movie = findMovieByquery(q);

  if (movie) return res.status(200).json(movie);

  return res.status(404).end();
});

module.exports = app;