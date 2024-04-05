import React, { createContext, useState, useEffect } from "react";
import { getCart, addToCart, updateCartItem, removeFromCart } from "../api/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCart = async () => {
        try {
            const response = await getCart();
            setCart(response.data.products.map(product => ({
                ...product,
                qty: 1
            })));
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const addProductToCart = async (_id) => {
        try {
            await addToCart(_id);
            toast.success('Producto añadido al carrito');
            fetchCart();
        } catch (error) {
            setError(error);
        }
    };

    const updateProductInCart = async (_id, quantity) => {
        try {
            await updateCartItem(_id, quantity);
            fetchCart();
        } catch (error) {
            setError(error);
        }
    };

    const removeProductFromCart = async (_id) => {
        try {
            await removeFromCart(_id);
            fetchCart();
        } catch (error) {
            setError(error);
        }
    };

    const increaseQuantity = async (_id) => {
        try {
            await updateCartItem(_id, 1);
            fetchCart();
        } catch (error) {
            console.error("Error al aumentar la cantidad del producto:", error);
            setError(error);
        }
    };
    
    const decreaseQuantity = async (_id) => {
        try {
            await updateCartItem(_id, -1);
            fetchCart();
        } catch (error) {
            console.error("Error al disminuir la cantidad del producto:", error);
            setError(error);
        }
    };
    

    const value = {
        cart,
        loading,
        error,
        addProductToCart,
        updateProductInCart,
        removeProductFromCart,
        increaseQuantity,
        decreaseQuantity
    };

    return (
        <CartContext.Provider value={value}>
            <ToastContainer />
            {children}
        </CartContext.Provider>
    );
};
