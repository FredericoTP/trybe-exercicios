const express = require('express');
const { addNewLocation } = require('./ecoturism');
const nameValidation = require('./middleware/nameValidation');
const priceValidation = require('./middleware/priceValidation');
const descriptionValidation = require('./middleware/descriptionValidation');
const createdAtValidation = require('./middleware/createdAtValidation');
const ratingValidation = require('./middleware/ratingValidation');

const app = express();

app.use(express.json());

app.post('/activities',
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation, (req, res) => {
  const object = req.body;

  addNewLocation(object);

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
