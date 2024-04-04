import React, { createContext, useEffect, useState } from 'react';
import { sendOrder, getOrders } from '../api/order';

// Creamos el contexto
export const OrderContext = createContext();



export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  // Función para obtener todas las órdenes
  const fetchOrders = async () => {
    try {
      const response = await getOrders(); // Agregar los paréntesis aquí
      setOrders(response.data);
    } catch (error) {
      console.error('Error al obtener las órdenes:', error);
    }
  };


  // Obtener las órdenes al cargar el componente
  useEffect(() => {
    fetchOrders();
  }, []);
  const sendOrderToServer = async (orderData) => {
    try {
      const response = await sendOrder(orderData);
      console.log(response.data);
    } catch (error) {
      console.error('Error al enviar la orden:', error);
    }
  };

  const value = {
    sendOrderToServer,
    orders,
    fetchOrders
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
