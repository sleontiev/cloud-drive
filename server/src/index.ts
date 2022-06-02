import express, { Express } from 'express';
import { config } from 'dotenv';
import db_connection from '../utils/db_connection';

config();

import auth from './routes/auth';
import cors from './middleware/cors.middleware';

const PORT: string | undefined = process.env.PORT;
const DB_HOST: string | undefined = process.env.DB_HOST;

const app: Express = express();

app.use(cors);
app.use(express.json());
app.use('/api/auth', auth);

const startServer = (): void => {
  try {
    db_connection.connect(DB_HOST as string);
    app.listen(PORT, () => {
      console.log('App is running...');
    });
  } catch (e: unknown) {
    if (typeof e === 'string') {
      throw new Error(e);
    }
  }
};

startServer();
