import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import movieRoutes from './routes/movieRoutes.js'
import productRoutes from './routes/productRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { errorHandler, notFound } from './middlewares/errorMiddleware.js';
import cors from 'cors'

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;

const app = new express();

app.use(cors())

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/user', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server Running on Port ${PORT}`
  )
);
