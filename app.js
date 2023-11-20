import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './router/index.js';

const app = express();

app.set("view engine", 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(router);

app.use(errorHandler);

export default app;
