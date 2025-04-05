import express from 'express';
import { fetchNumbers } from '../utils/fetchNumbers';
import { updateWindow, getAverage } from '../utils/slidingWindow';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const VALID_IDS = ['p', 'f', 'e', 'r'];

router.get('/:numberid', async (req, res) => {
  const id = req.params.numberid;

  if (!VALID_IDS.includes(id)) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const numbers = await fetchNumbers(id, process.env.CLIENT_ID!, process.env.CLIENT_SECRET!);
  const { prev, curr } = updateWindow(numbers);

  res.json({
    windowPrevState: prev,
    windowCurrState: curr,
    numbers,
    avg: getAverage()
  });
});

export default router;
