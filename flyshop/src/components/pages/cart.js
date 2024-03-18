// import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
// import { GiPadlock } from "react-icons/gi";
// initMercadoPago('TEST-3895782c-1661-4be1-bc80-f08d1dbf08fb');
import React from 'react' 
import Footer from '../common/footer'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import '../../css/cart.css';
// import { ProductContext } from '../../context/ProductContext'
// useContext(ProductContext);
const Cart = ({ cart, setCart }) => {
    const incqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((object) => {
            return object.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : object
        }))
    }
    const decqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if (exsit.qty < 2) {
            alert("No puedes comprar 0 articulos")
        }
        else {
            setCart(cart.map((object) => {
                return object.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : object
            }))
        }
    }
    const removeproduct = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        if (exsit.qty > 0) {
            setCart(cart.filter((x) => {
                return x.id !== product.id
            }))
        }
    }
    const Totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>
            <h1 className='title'>Carrito de compras</h1>
            <div className='cartcontainer'>
                {cart.length === 0 &&
                    <div className='emptycart'>
                        <h2 className='empty'>El carro está vacio</h2>
                        <Link className='emptycartbtn' to='/product'>Comprar ahora</Link>
                    </div>}
                <div className='contant'>
                    {
                        cart.map((object) => {
                            const imageUrl = object.images && object.images[0];
                            return (
                                <div className='cart_item' key={object.id}>
                                    <div className='img_box'>
                                    {imageUrl ? ( // Conditionally render the image if a URL exists
                      <img src={imageUrl} alt={object.title} />
                    ) : (
                      <p>No image available</p> // Display a placeholder if no image URL is found
                    )}
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h3>{object.title}</h3>
                                            <div className='price'>
                                                <h3>${object.Price}</h3>
                                                <div className='qty'>
                                                    <button className='decqty' onClick={() => decqty(object)}>-</button>
                                                    <input type='text' value={object.qty}></input>
                                                    <button className=' incqty' onClick={() => incqty(object)}>+</button>
                                                </div>
                                                <h4 className='subtotal'>${object.Price * object.qty} COP</h4>
                                            </div>
                                        </div>
                                        <div className='close'>
                                            <button onClick={() => removeproduct(object)}><IoMdClose /></button>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="divider"></div>
                {
                    cart.length > 0 &&
                    <div className='resumen'>
                    <h1>Resumen de la compra</h1>
                        <p className='totalprice'>Total: COP {Totalprice}</p>
                        {/* <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} /><GiPadlock/> */}

                    </div>
                }
            </div>
            <Footer />
        </>
    )
}

export default Cart