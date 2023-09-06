import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { commentsRoute } from './routes';
import { errorMiddleware } from './middlewares';

dotenv.config();

const app = express();
const DOMAIN = process.env.DOMAIN || 'localhost';
const PORT = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/comments', commentsRoute, errorMiddleware);

app.listen(PORT, DOMAIN, () => {
  console.log(`[server]: http://${DOMAIN}:${PORT}`);
});
