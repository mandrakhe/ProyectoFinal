import { Router } from "express";
import { products, createProduct, deleteProduct } from "../controllers/product.controller.js";
const router = Router();

/* Crear Producto*/
router.post('/create-product', createProduct)

/* Mostrar producto, mostrar productos */
router.get('/products', products)

/* Eliminar Producto */
/* Eliminar Producto */
router.delete('/deleteProduct/:id', deleteProduct);

export default router;