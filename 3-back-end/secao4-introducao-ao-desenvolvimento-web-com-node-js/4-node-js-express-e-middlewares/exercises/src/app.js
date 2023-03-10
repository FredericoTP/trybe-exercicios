const express = require('express');
const { addNewLocation } = require('./ecoturism');

const app = express();

app.use(express.json());

app.post('/activities', (req, res) => {
  const object = req.body;

  addNewLocation(object);

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = app;
