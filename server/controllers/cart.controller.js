import { Cart } from "../models/cart.models.js";
import { Product } from "../models/product.models.js";
import User from '../models/user.models.js';
import mongoose from 'mongoose';

export const removeExpiredCarts = async () => {
    try {
        await Cart.deleteMany({ expirationDate: { $lte: new Date() } });
        console.log("Carritos expirados eliminados correctamente.");
    } catch (error) {
        console.error("Error al eliminar carritos expirados:", error);
    }
};

// Obtener el carrito del usuario actual
export const getCart = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "No se proporcionó un usuario válido." });
        }
        const cart = await Cart.findOne({ user: req.user.id }).populate("products.product");
        if (!cart) {
            return res.status(404).json({ message: "No se encontró ningún carrito para este usuario." });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Agregar un producto al carrito del usuario actual

export const addToCart = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ error: "No se encontró el producto" });
        }

        const userId = req.user.id; // Obtener el ID del usuario
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId }); // Pasar el ID del usuario al crear el carrito
            await cart.save();
        }

        const existingProductIndex = cart.products.findIndex(
            (p) => p.product.toString() === req.params.id // Corregir req.params.id
        );

        if (existingProductIndex !== -1) {
            cart.products[existingProductIndex].quantity++;
            console.log("El producto ya está en el carrito")
        } else {
            cart.products.push({ product: req.params.id, quantity: 1 }); // Corregir req.params.id
        }

        await cart.save();
        res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor" });
    }
};


// Actualizar la cantidad de un producto en el carrito del usuario actual

export const updateAmount = async (req, res) => {
    try {
        // Validación de usuario y obtención de ID
        if (!req.user || !req.user.id) {
            return res.status(401).json({ error: "Usuario no autenticado." });
        }
        const userId = req.user.id;

        // Obtención de ID de producto y cantidad
        const productId = req.params.id;
        const quantity = parseInt(req.params.quantity);

        // Validación de ID de producto
        if (!mongoose.Types.ObjectId.isValid(productId)) {
            return res.status(400).json({ error: "ID de producto inválido." });
        }

        // Validación de la cantidad
        if (isNaN(quantity)) {
            return res.status(400).json({ error: "La cantidad debe ser un número." });
        }

        // Buscar el carrito del usuario
        const cart = await Cart.findOne({ user: userId });

        // Si no se encuentra el carrito
        if (!cart) {
            return res.status(404).json({ error: "No se encontró el carrito para este usuario." });
        }

        // Buscar el índice del producto en el carrito
        const productIndex = cart.products.findIndex(product => product.product.toString() === productId);

        // Si el producto no está en el carrito
        if (productIndex === -1) {
            return res.status(404).json({ error: "El producto no está en el carrito." });
        }

        // Ajustar la cantidad
        cart.products[productIndex].quantity += quantity;

        // Asegurar una cantidad mínima de 1
        cart.products[productIndex].quantity = Math.max(cart.products[productIndex].quantity, 1);

        // Guardar los cambios en el carrito
        await cart.save();

        // Enviar el carrito actualizado como respuesta
        res.status(200).json(cart);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error en el servidor." });
    }
};




// Eliminar un producto del carrito del usuario actual

// Eliminar un producto del carrito del usuario actual
export const removeToCart = async (req, res) => {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "No se proporcionó un usuario válido." });
        }

        console.log("ID del producto a eliminar:", req.params.id); // Agregar un registro para verificar el ID del producto

        const cart = await Cart.findOne({ user: req.user.id });
        console.log("Carrito encontrado:", cart); // Agregar un registro para verificar si se encuentra el carrito

        const productToRemove = cart.products.find(product => product.product._id.toString() === req.params.id);

        if (!productToRemove) {
            console.log("Producto no encontrado en el carrito."); // Agregar un registro para el caso en que el producto no se encuentre en el carrito
            return res.status(404).json({ error: "Producto no encontrado en el carrito." });
        }

        console.log("Producto encontrado en el carrito:", productToRemove); // Agregar un registro para verificar el producto en el carrito

        // Eliminar el producto del carrito
        cart.products.pull(productToRemove);
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        console.error(error); // Registrar cualquier error que ocurra durante el proceso
        res.status(500).json({ error: error.message });
    }
};
