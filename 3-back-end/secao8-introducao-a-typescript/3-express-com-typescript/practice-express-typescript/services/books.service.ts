import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';

class BookService {
  model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default BookService;