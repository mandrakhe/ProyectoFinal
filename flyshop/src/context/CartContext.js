import React, { createContext, useState, useEffect } from "react";
import { getCart, addToCart, updateCartItem, removeFromCart } from "../api/cart";

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
                qty: 1 // Establecer la cantidad predeterminada como 1
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

    const value = {
        cart,
        loading,
        error,
        addProductToCart,
        updateProductInCart,
        removeProductFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
