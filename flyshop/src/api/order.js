import axios from './axios';

export const sendOrder = (orderData) => axios.post('/order', orderData);

export const getOrders = () => axios.get('/getOrders');