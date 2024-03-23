import axios from './axios';

export const getProducts = () => axios.get(`/products`);

export const createProduct = (formData) => axios.post(`/create-product`, formData);

export const deleteProduct = (id) => axios.delete(`/deleteProduct/${id}`);
