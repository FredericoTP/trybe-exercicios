const express = require('express');
const { addNewLocation } = require('./ecoturism');
const nameValidation = require('./middleware/nameValidation');
const priceValidation = require('./middleware/priceValidation');

const app = express();

app.use(express.json());

app.post('/activities', nameValidation, priceValidation, (req, res) => {
  const object = req.body;

  addNewLocation(object);

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
