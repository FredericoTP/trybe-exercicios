import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

// alternativa ao uso do bind
// router.get('/books', (req, res) => booksController.getAll(req, res));

export default router;