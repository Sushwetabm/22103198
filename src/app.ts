import express from 'express';
import numbersRouter from './routes/numbers';

const app = express();
app.use(express.json());
app.use('/numbers', numbersRouter);

export default app;
