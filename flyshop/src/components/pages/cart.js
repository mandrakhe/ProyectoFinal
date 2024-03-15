import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../common/footer'
import { IoMdClose } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import '../../css/cart.css';

const Cart = ({ cart, setCart }) => {
    const incqty = (product) => {
        const exsit = cart.find((x) => {
            return x.id === product.id
        })
        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? { ...exsit, qty: exsit.qty + 1 } : curElm
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
            setCart(cart.map((curElm) => {
                return curElm.id === product.id ? { ...exsit, qty: exsit.qty - 1 } : curElm
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
                        cart.map((curElm) => {
                            return (
                                <div className='cart_item' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h3>{curElm.Name}</h3>
                                           <div className='price'>
                                           <h3>${curElm.Price}</h3>
                                            <div className='qty'>
                                                <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                                <input type='text' value={curElm.qty}></input>
                                                <button className=' incqty' onClick={() => incqty(curElm)}>+</button>
                                            </div>
                                            <h4 className='subtotal'>${curElm.Price * curElm.qty} COP</h4>
                                           </div>                                       
                                        </div> 
                                        <div className='close'>
                                            <button onClick={() => removeproduct(curElm)}><IoMdClose/></button>
                                        </div>
                                       
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    cart.length > 0 &&
                    <>
                        <h2 className='totalprice'>Total: COP {Totalprice}</h2>
                        <button className='checkout'>Pago seguro <i><GiPadlock /></i></button>
                    </>
                }
            </div>
            <Footer />
        </>
    )
}

export default Cart
