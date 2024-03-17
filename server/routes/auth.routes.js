import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js";
import { products, createProduct } from "../controllers/product.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
/* import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js"; */

const router = Router();

/* Login y Register + Auth */
router.post('/register',/*  validateSchema(registerSchema), */ register);
router.post('/login',/*  validateSchema(loginSchema), */ login);
router.post('/logout', logout);
router.get('/verify', verifyToken);
router.get('/profile', requiredAuth, profile);

/* Crear y mostrar productos */
router.post('/create-product', createProduct)
router.get('/products', products)


export default router;