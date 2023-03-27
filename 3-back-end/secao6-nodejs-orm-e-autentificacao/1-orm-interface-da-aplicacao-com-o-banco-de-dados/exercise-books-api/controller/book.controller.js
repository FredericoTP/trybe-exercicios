const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getAll,
}