import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";

const router = Router();

// Ruta para crear una nueva orden
router.post('/order', requiredAuth, createOrder);

// Ruta para crear una nueva orden
router.get('/getOrders', requiredAuth, getAllOrders);

export default router;