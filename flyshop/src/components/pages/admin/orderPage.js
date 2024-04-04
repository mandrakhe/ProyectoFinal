import React, { useContext, useEffect } from 'react';
import { OrderContext } from '../../../context/OrderContext';
import { ProductContext } from '../../../context/ProductContext';

function OrdersPage() {
    const { orders, fetchOrders } = useContext(OrderContext);
    const { products } = useContext(ProductContext)

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div>
            <h2>Lista de Órdenes</h2>
            {orders.map(order => (
                <div key={order._id}>
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
                        {order.cart.map(item => {
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
    );
}

export default OrdersPage;
