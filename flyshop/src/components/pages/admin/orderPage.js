// client/src/components/OrdersPage.js
import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../../context/OrderContext';
import { ProductContext } from "../../../context/ProductContext"
import { updatePaymentStatus, deleteOrder } from '../../../api/order';
import './adminCSS/orderPage.css';

function OrdersPage() {
    const { orders, fetchOrders } = useContext(OrderContext);
    const { products } = useContext(ProductContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(orders);

    useEffect(() => {
        fetchOrders();
    }, []);

    useEffect(() => {
        setFilteredOrders(orders.filter((order) =>
            order.nombre.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    }, [searchQuery, orders]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handlePaymentStatusChange = async (orderId, newPaymentStatus) => {
        try {
            await updatePaymentStatus(orderId, newPaymentStatus);
            // Actualizar la lista de órdenes después de cambiar el estado de pago
            fetchOrders();
        } catch (error) {
            console.error('Error al actualizar el estado de pago de la orden:', error);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            await deleteOrder(orderId);
            // Actualizar la lista de órdenes después de eliminar la orden
            fetchOrders();
        } catch (error) {
            console.error('Error al eliminar la orden:', error);
        }
    };

    return (
        <>
            <div className="search-bar">
                <h2>Buscar <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchQuery}
                    onChange={handleSearchChange}
                /></h2>
            </div>

            <h2 className="title-order">Lista de Órdenes</h2>
            <div className="order">
                {filteredOrders.map((order) => (
                    <div key={order._id} className="order-card">
                        <h3>Orden ID: {order._id}</h3>
                        <p>Email: {order.email}</p>
                        <p>Departamento: {order.departamento}</p>
                        <p>Ciudad: {order.ciudad}</p>
                        <p>Nombre: {order.nombre}</p>
                        <p>Dirección: {order.direccion}</p>
                        <p>Método de Pago: {order.metodoPago}</p>
                        <p>Dirección de Envío: {order.direccionEnvio}</p>
                        <p>Total: {order.total}</p>
                        <p>Estado de Pago: {order.estadoPago ? 'Pagado' : 'No Pagado'}</p>
                        <button onClick={() => handlePaymentStatusChange(order._id, !order.estadoPago)}>
                            {order.estadoPago ? 'Marcar como no pagado' : 'Marcar como pagado'}
                        </button>
                        <button onClick={() => handleDeleteOrder(order._id)}>Eliminar Orden</button>
                        <h4>Productos en la Orden:</h4>
                        <ul>
                            {order.cart.map((item) => {
                                const product = products.find(prod => prod._id === item.product);
                                return (
                                    <li key={item._id}>
                                        Producto: {product ? product.title : 'Producto no encontrado'} - Cantidad: {item.quantity}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default OrdersPage;
