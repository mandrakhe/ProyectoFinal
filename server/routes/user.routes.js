import { Router } from "express";
import { getUser, getUsers, deleteUser, editUser } from "../controllers/user.controller.js";
const router = Router();



/* Mostrar usuario, mostrar usuarios */
router.get('/user/:id', getUser);
router.get('/users', getUsers)

/* Eliminar Usuario */
router.delete('/deleteUser/:id', deleteUser);

/* Editar usuario */
router.put('/editUser/:id', editUser)

export default router;