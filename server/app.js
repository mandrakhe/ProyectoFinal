import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import userRoutes from './routes/user.routes.js'

import cookieParser from 'cookie-parser';
import cors from 'cors';
import { removeExpiredCarts } from './controllers/cart.controller.js';

const app = express();
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use("/api" , authRoutes);
app.use("/api" , productRoutes);
app.use("/api" , cartRoutes);
app.use("/api" , userRoutes);

// Programa la eliminación de carritos expirados cada 48 horas
const milisegundos = 3600000; /* 3.600.000 milisegundos equivalen a una hora (Segun una IA, google da un resultado diferente) */
const horas = 48; 
setInterval(removeExpiredCarts, milisegundos * horas); 
export default app;
