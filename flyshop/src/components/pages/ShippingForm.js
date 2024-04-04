import React from 'react'
import Nike from '../../assets/images/zapatos/nike.png';
import '../../css/ShippingForm.css'



function ShippingForm() {
    return (
   <div className='shipping'>
         <div className='shipping-Form'>
            <form>
                <h2>Contacto</h2>
                <input type="text" placeholder="Email o teléfono móvil" />
                <strong>*Solo se hacen envíos en Colombia*</strong>
                <h2>Entrega</h2>

                <input type="text" placeholder="Ingresar Departamento" />
                <input type="text" placeholder="Ingresar Ciudad" />
                <h3>Información del Comprador</h3>
                <input type="text" placeholder="Nombre y Apellidos" />
                <input type="text" placeholder="Dirección" />
                <input type="text" placeholder="Casa, apartamento, etc (Opcional)" />
                <h2>Pago</h2>
                <p>Todas las transacciones son seguras y están encriptadas</p>
                <div className='checkoutMenu'>
                    <h3>Seleccionar método de pago:</h3>
                    <select>
                        <option value="mercadoPago">Mercado Pago</option>
                        <option value="transferencia">Pago por transferencia</option>
                        <option value="contraentrega">Contraentrega</option>
                    </select>
                </div>
                <div className='checkoutMenu'>
                    <h3>Seleccionar dirección de envío:</h3>
                    <select>
                        <option value="mismaDireccion">La misma dirección de envío</option>
                        <option value="otraDireccion">Usar una dirección de recibo distinta</option>
                    </select>
                </div>
            </form>
        </div> 
        <div className='cart-view'>
        <div className='img-box'>
        <img src={Nike} alt='Nike'/>
        <div className='qty'>qty</div>
        <h3>nombre del producto</h3>
        <h4>Subtotal: <p>aqui va el subtotal</p></h4>
        <h4>Método de pago elegido: <p>aqui va el metodo de pago</p> </h4>
        <h4>Total <p>Aquí va el total</p></h4>

        </div>
        </div>
<button>Pagar</button>
   </div>
    )
}

export default ShippingForm