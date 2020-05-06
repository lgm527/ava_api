import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello All!');
});

app.listen(3000, () =>
  console.log('Hello Ava team!'),
);
