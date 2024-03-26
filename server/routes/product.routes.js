import { Router } from "express";
import { getProduct, products, createProduct, deleteProduct } from "../controllers/product.controller.js";
const router = Router();

/* Crear Producto*/
router.post('/create-product', createProduct)

/* Mostrar producto, mostrar productos */
router.get('/product/:id', getProduct);
router.get('/products', products)

/* Eliminar Producto */
router.delete('/deleteProduct/:id', deleteProduct);

export default router;