const express = require('express');
const BookController = require('./controller/book.controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', BookController.getAll);

app.post('/books', BookController.createBook);

app.get('/books/:id', BookController.getById);

app.put('/books/:id', BookController.updateBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));