const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const { id } = req.params;
  const findId = teams.find((item) => item.id === Number(id));
  if (findId) {
    next();
  } else {
    res.sendStatus(400);
  }
};

module.exports = existingId;