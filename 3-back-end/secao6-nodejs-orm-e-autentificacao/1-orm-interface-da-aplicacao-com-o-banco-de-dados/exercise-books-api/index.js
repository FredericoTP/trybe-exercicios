const express = require('express');
const BookController = require('./controller/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/book', BookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));