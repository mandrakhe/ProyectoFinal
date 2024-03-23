import React, { createContext, useState, useEffect } from "react";
import { getProducts, createProduct, deleteProduct } from "../api/product";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
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
        fetchProducts();
    }, []);

    const createNewProduct = async (formData) => {
        try {
            await createProduct(formData);
            fetchProducts();
        } catch (error) {
            setError(error);
        }
    };

    const handleDeleteProduct = async (_id) => {
        try {
            await deleteProduct(_id);
            fetchProducts();
        } catch (error) {
            console.error(error);

        }
    };

    const value = {
        products,
        loading,
        error,
        createNewProduct,
        handleDeleteProduct,
    };

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
};
