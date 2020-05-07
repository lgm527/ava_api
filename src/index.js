import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import models, { sequelize } from './models';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(async (req, res, next) => {
  req.context = {
    models
  };
  next();
});

// Routes

app.use('/session', routes.session);
app.use('/conversations', routes.conversation);
app.use('/mutations', routes.mutation);

app.use('/ping', routes.ping);
app.use('/info', routes.info);
app.use('/dev', routes.dev);

// starting

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Hello Ava team! 👋')
  });
});
