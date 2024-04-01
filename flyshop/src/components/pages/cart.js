import React, { useContext } from 'react';
import Footer from '../common/footer';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { CartContext } from '../../context/CartContext';
import '../../css/cart.css';

const Cart = () => {
    const { cart, removeProductFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <>
            <h1 className='title'>Carrito de compras</h1>
            <div className='cartcontainer'>
                {cart.length === 0 && (
                    <div className='emptycart'>
                        <h2 className='empty'>El carro está vacío</h2>
                        <Link className='emptycartbtn' to='/product'>
                            Comprar ahora
                        </Link>
                    </div>
                )}
                <div className='contant'>
                    {cart.map((item) => {
                        const product = item.product; // Acceder al objeto de producto dentro del item del carrito
                        return (
                            <div className='cart_item' key={item._id}>
                                <div className='img_box'>
                                    {product.images ? (
                                        <img src={product.images[0]} alt={product.title} />
                                    ) : (
                                        <p>No hay imagen disponible</p>
                                    )}
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                        <h3>{product.title}</h3>
                                        <div className='price'>
                                            <h3>${product.price}</h3>
                                            <div className='qty'>
                                                <button className='decqty' onClick={() => decreaseQuantity(product)}>
                                                    -
                                                </button>
                                                <input type='text' value={item.qty} readOnly />
                                                <button className='incqty' onClick={() => increaseQuantity(product)}>
                                                    +
                                                </button>
                                            </div>
                                            <h4 className='subtotal'>${product.price * item.qty} COP</h4>
                                        </div>
                                    </div>
                                    <div className='close'>
                                        <button onClick={() => removeProductFromCart(item.product._id)}>
                                            <IoMdClose />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='divider'></div>
                {cart.length > 0 && (
                    <div className='resumen'>
                        <h1>Resumen de la compra</h1>
                        <p className='totalprice'>Total: COP</p>
                        {/* Aquí puedes agregar otros detalles del resumen de la compra */}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;