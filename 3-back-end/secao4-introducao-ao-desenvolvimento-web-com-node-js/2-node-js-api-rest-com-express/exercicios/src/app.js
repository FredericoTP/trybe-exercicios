const express = require('express');
const { readMovies } = require('./movies');

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movieById = movies.filter((item) => item.id === Number(id));

  if (movieById.length === 0) return res.status(404).json({ message: 'Movie not found' });

  return res.status(200).json(movieById);
});

app.get('/movies', async (req, res) => {
  const movies = await readMovies();

  if (!movies) return res.status(500).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json(movies);
});

module.exports = app;
