// client/src/context/OrderContext.js
import React, { createContext, useEffect, useState } from 'react';
import { sendOrder, getOrders, updatePaymentStatus } from '../api/order';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await getOrders();
            setOrders(response.data);
        } catch (error) {
            console.error('Error al obtener las órdenes:', error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const sendOrderToServer = async (orderData) => {
        try {
            const response = await sendOrder(orderData);
            console.log(response.data);
            // Actualizar la lista de órdenes después de crear una nueva orden
            fetchOrders();
        } catch (error) {
            console.error('Error al enviar la orden:', error);
        }
    };

    const updatePaymentStatus = async (orderId, paymentStatus) => {
        try {
            await updatePaymentStatus(orderId, paymentStatus);
            // Actualizar la lista de órdenes después de cambiar el estado de pago
            fetchOrders();
        } catch (error) {
            console.error('Error al actualizar el estado de pago de la orden:', error);
        }
    };

    const deleteOrder = async (orderId) => {
      try {
          await deleteOrder(orderId);
          // Actualizar la lista de órdenes después de eliminar una orden
          fetchOrders();
      } catch (error) {
          console.error('Error al eliminar la orden:', error);
      }
  };

    const value = {
        orders,
        sendOrderToServer,
        updatePaymentStatus,
        fetchOrders,
        deleteOrder
    };

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    );
};
