import axios from './axios';

export const sendOrder = (orderData) => axios.post('/order', orderData);

export const updatePaymentStatus = (orderId, paymentStatus) => axios.put(`/order/${orderId}/payment`, { estadoPago: paymentStatus });

export const getOrders = () => axios.get('/getOrders');

export const deleteOrder = (orderId) => axios.delete(`/order/${orderId}`);
