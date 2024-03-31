import axios from './axios';

export const getCart = () => axios.get('/cart');

export const addToCart = (id) => axios.post(`/cart/add/${id}`);

export const updateCartItem = (id, quantity) => axios.put(`/cart/update/${id}/${quantity}`);

export const removeFromCart = (id) => axios.delete(`/cart/remove/${id}`);
