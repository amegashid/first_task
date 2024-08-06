import express from 'express';
import mongoose from 'mongoose';

import CommandRouter from './routes/commandRoutes.js'

const app = express();

app.use(express.json())
app.use('/', CommandRouter);

mongoose
  .connect(
    `mongodb://localhost:27017/test_db`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });


export default app;