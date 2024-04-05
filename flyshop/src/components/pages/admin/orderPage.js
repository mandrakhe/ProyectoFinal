import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../../../context/OrderContext';
import { ProductContext } from '../../../context/ProductContext';
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

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
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