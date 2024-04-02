import React, { createContext, useState, useEffect } from "react";
import { getProducts, createProduct, deleteProduct, getProduct, updateProduct, editProduct } from "../api/product";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProduct = async (_id) => {
        try {
            const response = await getProduct(_id);
            setCurrentProduct(response.data);
        } catch (error) {
            setError(error);
        }
    };

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

    const updateProduct = async (_id, formData) => {
        try {
            await editProduct(formData, _id); // Cambiar el orden de los parámetros
            await fetchProducts();
        } catch (error) {
            setError(error);
        }
    };
    
    
    

    const value = {
        products,
        loading,
        error,
        createNewProduct,
        updateProduct,
        currentProduct,
        fetchProduct,
        handleDeleteProduct,
    };

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
};