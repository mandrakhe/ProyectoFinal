import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express();
app.use(cors({
    origin : "http://localhost:3000",
    credentials : true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use("/api" , authRoutes, productRoutes);


export default app;