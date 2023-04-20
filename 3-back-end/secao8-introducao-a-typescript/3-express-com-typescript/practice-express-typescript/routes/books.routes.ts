import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const router = Router();

const booksController = new BooksController();

router.get('/books', booksController.getAll);

router.get('/books/:id', booksController.getById);

router.post('/books', booksController.create);

router.put('/books/:id', booksController.update);

router.delete('/books/:id', booksController.remove);

router.patch('/books/:id', booksController.partialUpdate);

// alternativa ao uso do bind
// router.get('/books', (req, res) => booksController.getAll(req, res));
// router.get('/books/:id', (req, res) => booksController.getById(req, res));
// router.post('/books', (req, res) => booksController.create(req, res));
// router.put('/books/:id', (req, res) => booksController.update(req, res));
// router.delete('/books/:id', (req, res) => booksController.remove(req, res));

export default router;