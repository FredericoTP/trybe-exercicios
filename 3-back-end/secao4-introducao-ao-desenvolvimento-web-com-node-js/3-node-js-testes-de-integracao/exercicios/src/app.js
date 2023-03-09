const express = require('express');
const { 
  getAllChocolates, getChocolateById, getChocolatesByBrand, getTotalChocolates, 
} = require('./cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await getAllChocolates();

  if (!chocolates) return res.status(404).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
  const totalChocolates = await getTotalChocolates();

  if (!totalChocolates) return res.status(404).json({ message: 'Algo inesperado aconteceu!' });

  return res.status(200).json({ totalChocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;

  const chocolate = await getChocolateById(Number(id));

  if (!chocolate) return res.status(404).json({ message: 'Chocolate não encontrado!' });

  return res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;

  const chocolates = await getChocolatesByBrand(Number(brandId));

  if (chocolates.length === 0) {
    return res.status(404).json({ message: 'Chocolate não encontrado!' });
  }

  return res.status(200).json({ chocolates });
});

module.exports = app;