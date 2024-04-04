import { Order } from "../models/order.models.js";

export const createOrder = async (req, res) => {
    try {
        // Verificar si hay un usuario válido en la solicitud
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "No se proporcionó un usuario válido." });
        }
        
        // Calcular el total de la orden
        const totalPrice = calculateTotalPrice(req.body.cart);
        
        // Crear la orden y asociarla con el ID del usuario en la solicitud
        const orderData = {
            ...req.body,
            user: req.user.id,
            valorTotal: totalPrice,
            cart: req.body.cart.map(item => ({
                product: item.product,
                quantity: item.quantity
            }))
        };
        
        const order = new Order(orderData);
        await order.save();
        res.status(201).json({ message: 'Orden creada exitosamente', order });
    } catch (error) {
        console.error('Error al guardar la orden:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Función para calcular el total de la orden
const calculateTotalPrice = (cart) => {
    return cart.reduce((total, item) => {
        const product = item.product;
        return total + (product.price * item.quantity);
    }, 0);
};

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('user');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};