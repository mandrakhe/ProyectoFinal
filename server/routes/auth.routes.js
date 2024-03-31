import { Router } from "express";
import { register, login, logout, profile, verifyToken } from "../controllers/auth.controller.js";

import { requiredAuth } from "../middlewares/tokenValidation.js";

const router = Router();

/* Login y Register + Auth */
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/verify', verifyToken);
router.get('/profile', requiredAuth, profile);



export default router;