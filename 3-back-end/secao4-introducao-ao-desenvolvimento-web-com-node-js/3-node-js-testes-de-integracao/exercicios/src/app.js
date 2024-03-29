const express = require('express');
const { 
  getAllChocolates,
  getChocolateById, 
  getChocolatesByBrand, getTotalChocolates, getChocolatesByName, updateChocolateById,
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

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getChocolatesByName(name.toLowerCase());

  return res.status(chocolates.length === 0 ? 404 : 200).json(chocolates);
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

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const updatedChocolate = await updateChocolateById(Number(id), { name, brandId });

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });

  res.status(404).json({ message: 'chocolate not found' });
});

module.exports = app;