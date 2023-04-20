import express from 'express';
import loginRouter from './routes/login.routes';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});