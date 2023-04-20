import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import BookService from '../services/books.service';

class BooksController {
  bookService: BookService;

  constructor(bookService = new BookService()) {
    this.bookService = bookService;
    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json(books);
  };
}

export default BooksController;