import { Router } from "express";
import { addToCart, getCart, removeToCart, updateAmount } from "../controllers/cart.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";

const router = Router();

/* Obtener el carrito del usuario actual */
router.get("/cart", requiredAuth, getCart);

/* Agregar un producto al carrito del usuario actual */
router.post("/cart/add/:id", requiredAuth, addToCart);

/* Actualizar la cantidad de un producto en el carrito del usuario actual */
router.put("/cart/update/:id/:quantity", requiredAuth, updateAmount);

/* Eliminar un producto del carrito del usuario actual */
router.delete("/cart/remove/:id", requiredAuth, removeToCart);

export default router;
