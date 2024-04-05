import React, { useContext, useState } from 'react';
import Bancolombia from '../../assets/images/Bancolombia.jpg';
import { CartContext } from '../../context/CartContext';
import { OrderContext } from '../../context/OrderContext';
import '../../css/ShippingForm.css';

function ShippingForm() {
    const { cart } = useContext(CartContext);
    const { sendOrderToServer } = useContext(OrderContext);
    const [showTransferImage, setShowTransferImage] = useState(false); // Estado para mostrar u ocultar la imagen
    const totalPrice = cart.reduce((total, item) => {
        const product = item.product;
        return total + (product.price * item.quantity);
    }, 0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Recopilar datos del formulario
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const departamento = formData.get('departamento');
        const ciudad = formData.get('ciudad');
        const nombre = formData.get('nombre');
        const direccion = formData.get('direccion');
        const metodoPago = formData.get('metodoPago');
        const direccionEnvio = formData.get('direccionEnvio');

        if (!email ||!departamento ||!ciudad ||!nombre ||!direccion ||!metodoPago ||!direccionEnvio) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        const orderData = {
            email,
            departamento,
            ciudad,
            nombre,
            direccion,
            metodoPago,
            direccionEnvio,
            cart: cart.map(item => ({
                product: item.product._id,
                quantity: item.quantity
            })),
            total: totalPrice
        };

        try {
            await sendOrderToServer(orderData);
            alert('Su orden fue creada con éxito. Redirigiendo al home...');
            window.location.href = '/';
        } catch (error) {
            console.error('Error al enviar la orden:', error);
            alert('Error al enviar la orden. Por favor, inténtelo de nuevo.');
        }
    };

    const handleOptionChange = (e) => {
        setShowTransferImage(e.target.value === 'transferencia'); // Mostrar la imagen si la opción es 'transferencia'
    };

    return (
        <div className='shipping'>
            <div className='shipping-Form'>
                <form onSubmit={handleSubmit}>
                    <h2>Contacto</h2>
                    <input type="text" name="email" placeholder="Email o teléfono móvil" required />
                    <h2>Entrega</h2>
                    <strong>*Solo se hacen envíos en Colombia*</strong>
                    <input type="text" name="departamento" placeholder="Ingresar Departamento" required />
                    <input type="text" name="ciudad" placeholder="Ingresar Ciudad" required />
                    <h3>Información del Comprador</h3>
                    <input type="text" name="nombre" placeholder="Nombre y Apellidos" required />
                    <input type="text" name="direccion" placeholder="Dirección" required />
                    <input type="text" name="direccionEnvio" placeholder="Casa, apartamento, etc (Opcional)" />
                    <h2>Pago</h2>
                    <strong>Todas las transacciones son seguras y están encriptadas</strong>
                    <div className='checkoutMenu'>
                        <h3>Seleccionar método de pago:</h3>
                        <select name="metodoPago" onChange={handleOptionChange} required>
                            <option value="mercadoPago">Mercado Pago</option>
                            <option value="transferencia">Pago por transferencia</option>
                            <option value="contraentrega">Contraentrega</option>
                        </select>
                    </div>
                    {showTransferImage && (
                        <img id='transferencia' src={Bancolombia} alt="Imagen de transferencia" />
                    )}
                    <div className='checkoutMenu'>
                        <h3>Seleccionar dirección de envío:</h3>
                        <select name="direccionEnvio" required>
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
                            </div>
                            <div className='info_box'>
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