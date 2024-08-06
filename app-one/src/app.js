import express from 'express';
import cors from 'cors';

import TestRouter from './routes/testRoutes.js'

const app = express();

app.use(cors());
app.use(express.json())

app.use('/', TestRouter);

export default app;