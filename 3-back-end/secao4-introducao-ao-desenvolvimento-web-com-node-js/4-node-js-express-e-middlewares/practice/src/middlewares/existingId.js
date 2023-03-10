const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const { id } = req.params;
  const findId = teams.some((item) => item.id === Number(id));
  if (!findId) return res.sendStatus(400).json({ message: 'Time não encontrado' });
  next();
};

module.exports = existingId;