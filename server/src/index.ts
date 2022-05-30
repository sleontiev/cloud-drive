import express, { Express } from 'express';
import { config } from 'dotenv';
import dbConfig from './db';

config();

const PORT:string | undefined = process.env.PORT;
const DB_HOST:string | undefined = process.env.DB_HOST;

const app: Express = express();

const startServer = (): void => {
  try {
    dbConfig.connect(DB_HOST as string);
    app.listen(PORT, () => {
      console.log('App is running...')
    })
  } catch (e: unknown) {
    if (typeof e === 'string') {
      throw new Error(e);
    }
  }
};

startServer();
