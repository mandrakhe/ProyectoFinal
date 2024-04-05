import { Router } from "express";
import { createOrder, getAllOrders, updatePaymentStatus, deleteOrder } from "../controllers/order.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";

const router = Router();

// Ruta para crear una nueva orden
router.post('/order', requiredAuth, createOrder);

// Ruta para actualizar el estado de pago de la ordern
router.put('/order/:id/payment', requiredAuth, updatePaymentStatus);

// Ruta para crear una nueva orden
router.get('/getOrders', requiredAuth, getAllOrders);

// Eliminar orden
router.delete('/order/:id', requiredAuth, deleteOrder);



export default router;