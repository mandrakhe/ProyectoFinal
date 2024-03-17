import axios from './axios';

export const getProducts = () => axios.get(`/products`);
export const createProduct = () => axios.get(`/create-product`);