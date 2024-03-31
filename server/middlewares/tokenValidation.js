import Jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const requiredAuth = (req, res, next) => {
    console.log('Authentication');
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({ message: "No token, Authorization Denied" });
    }

    Jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid Token" });
        }

        req.user = user;
        next();
    });
};
