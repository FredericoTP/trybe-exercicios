const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
}

module.exports = {
  getAll,
}