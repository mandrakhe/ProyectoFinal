import React, { createContext, useState, useEffect } from 'react'
import { getProducts, createProduct } from '../api/product';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => { // Define fetchProducts function here
        try {
            const response = await getProducts();
            setProducts(response.data.products);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(); // Call fetchProducts inside useEffect
    }, []);

    const createNewProduct = async (formData) => {
        try {
            await createProduct(formData);
            fetchProducts(); // Update products after creation
        } catch (error) {
            setError(error);
        }
    };

    const value = {
        products,
        loading,
        error,
        createNewProduct,
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
