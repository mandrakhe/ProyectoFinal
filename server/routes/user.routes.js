import { Router } from "express";
import { getUser, getUsers, deleteUser } from "../controllers/user.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
const router = Router();



/* Mostrar usuario, mostrar usuarios */
router.get('/user/:id', getUser);
router.get('/users', getUsers)

/* Eliminar Producto */
router.delete('/deleteUser/:id', deleteUser);

export default router;