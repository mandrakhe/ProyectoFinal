import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { OrderContext } from '../../context/OrderContext';
import '../../css/ShippingForm.css';

function ShippingForm() {
    const { cart } = useContext(CartContext);
    const { sendOrderToServer } = useContext(OrderContext);

    const totalPrice = cart.reduce((total, item) => {
        const product = item.product;
        return total + (product.price * item.quantity);
    }, 0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Recopilar datos del formulario
        const formData = new FormData(event.target);
        const orderData = {
            email: formData.get('email'),
            departamento: formData.get('departamento'),
            ciudad: formData.get('ciudad'),
            nombre: formData.get('nombre'),
            direccion: formData.get('direccion'),
            metodoPago: formData.get('metodoPago'),
            direccionEnvio: formData.get('direccionEnvio'),
            cart: cart.map(item => ({
                product: item.product._id,
                quantity: item.quantity
            })),
            total: totalPrice
        };

        await sendOrderToServer(orderData);
    };



    return (
        <div className='shipping'>
            <div className='shipping-Form'>
                <form onSubmit={handleSubmit}>
                    <h2>Contacto</h2>
                    <input type="text" name="email" placeholder="Email o teléfono móvil" />
                    <h2>Entrega</h2>
                    <strong>*Solo se hacen envíos en Colombia*</strong>
                    <input type="text" name="departamento" placeholder="Ingresar Departamento" />
                    <input type="text" name="ciudad" placeholder="Ingresar Ciudad" />
                    <h3>Información del Comprador</h3>
                    <input type="text" name="nombre" placeholder="Nombre y Apellidos" />
                    <input type="text" name="direccion" placeholder="Dirección" />
                    <input type="text" name="direccionEnvio" placeholder="Casa, apartamento, etc (Opcional)" />
                    <h2>Pago</h2>
                    <strong>Todas las transacciones son seguras y están encriptadas</strong>
                    <div className='checkoutMenu'>
                        <h3>Seleccionar método de pago:</h3>
                        <select name="metodoPago">
                            <option value="mercadoPago">Mercado Pago</option>
                            <option value="transferencia">Pago por transferencia</option>
                            <option value="contraentrega">Contraentrega</option>
                        </select>
                    </div>
                    <div className='checkoutMenu'>
                        <h3>Seleccionar dirección de envío:</h3>
                        <select name="direccionEnvio">
                            <option value="mismaDireccion">La misma dirección de envío</option>
                            <option value="otraDireccion">Usar una dirección de recibo distinta</option>
                        </select>
                    </div>
                    <button type="submit">Enviar Orden</button>
                </form>
            </div>
            <div className='cart-view'>
                {cart.map((item) => {
                    const product = item.product; // Acceder al objeto de producto dentro del item del carrito
                    return (
                        <div className='cart-item_shi' key={item._id}>
                            <div className='img_box'>
                            {product.images ? (
                                    <img src={product.images[0]} alt={product.title} />
                                ) : (
                                    <p>No hay imagen disponible</p>
                                )}
                                <h3 id='qty' >{item.quantity}</h3>
                                
                            </div><div className='info_box'>
                                    <h3>{product.title}</h3>
                                    <h3>Talla: {product.size}</h3>
                                </div>
                            <div className='detail-shipping'>
                                <div className='info-detail'>
                                    <div className='priprice-shippingce'>
                                        <h4 className='subtotal'>${product.price * item.quantity} COP</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="total-price">
                    <h3>Total: ${totalPrice} COP</h3>
                </div>
            </div>
        </div>
    )
}

export default ShippingForm;
