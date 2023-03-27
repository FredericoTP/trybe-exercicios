const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
}

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
}

const createBook = async (tittle, author, pageQuantity) => {
  const newBook = await Book.create({ tittle, author, pageQuantity });

  return newBook;
}

const updateBook = async (id, title, author, pageQuantity) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  return updatedBook;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
}