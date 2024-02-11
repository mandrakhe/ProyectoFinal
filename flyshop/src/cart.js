import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import './cart.css'

const Cart = ({cart, setCart}) => {
    const incqty = (product) =>
    {
        const exsit = cart.find((x)=>{
            return x.id === product.id
        })
        setCart(cart.map((curElm)=>{
            return curElm.id === product.id ? {...exsit, qty: exsit.qty+1} : curElm
        }))
    }
    const decqty = (product) =>
    {
        const exsit = cart.find((x)=>{
            return x.id === product.id
        })
        if(exsit.qty<2)
        {
            alert("No puedes comprar 0 articulos")
        }
        else
        {
            setCart(cart.map((curElm)=>{
                return curElm.id === product.id ? {...exsit, qty: exsit.qty-1} : curElm
            }))
        }
    }
    const removeproduct = (product) =>
    {
        const exsit = cart.find((x)=>{
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setCart(cart.filter((x) =>
            {
                return x.id !== product.id
            }))
        }
    }
    return (
        <>
        <div className='cartcontainer'>
            {cart.length === 0 && 
            <div className='emptycart'>
            <h2 className='empty'>El carro está vacio</h2>
            <Link className='emptycartbtn' to='/product'>Comprar ahora</Link>
            </div>}
            <div className='contant'>
                {
                    cart.map((curElm) =>
                    {
                        return(
                            <div className='cart_item' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Name}></img>
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Brand}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Precio COP {curElm.Price}</p>
                                    <div className='qty'>
                                        <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                        <input type='text' value={curElm.qty}></input>
                                        <button className=' incqty' onClick={() => incqty(curElm)}>+</button>
                                    </div>
                                    <h4>sub total: ${curElm.Price * curElm.qty}</h4>
                                    <button onClick={()=> removeproduct(curElm)}><IoMdClose /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}

export default Cart
