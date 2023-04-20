import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  bookService: BookService;

  constructor(bookService = new BookService()) {
    this.bookService = bookService;
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };

  async getById(req: Request, res: Response): Promise<void> {
    const id = parseInt(req.params.id, 10);
    const book = await this.bookService.getById(id);

    if (!book) {
      res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!' });
    } else {
      res.status(statusCodes.OK).json(book);
    }
  }
}

export default BooksController;