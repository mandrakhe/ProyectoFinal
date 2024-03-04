import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import { GiPadlock } from "react-icons/gi";
import '../../css/favorite.css';

const favorite = ({favorite, setfavorite}) => {
    const incqty = (product) =>
    {
        const exsit = favorite.find((x)=>{
            return x.id === product.id
        })
        setfavorite(favorite.map((curElm)=>{
            return curElm.id === product.id ? {...exsit, qty: exsit.qty+1} : curElm
        }))
    }
    const decqty = (product) =>
    {
        const exsit = favorite.find((x)=>{
            return x.id === product.id
        })
        if(exsit.qty<2)
        {
            alert("No puedes comprar 0 articulos")
        }
        else
        {
            setfavorite(favorite.map((curElm)=>{
                return curElm.id === product.id ? {...exsit, qty: exsit.qty-1} : curElm
            }))
        }
    }
    const removeproduct = (product) =>
    {
        const exsit = favorite.find((x)=>{
            return x.id === product.id
        })
        if(exsit.qty > 0)
        {
            setfavorite(favorite.filter((x) =>
            {
                return x.id !== product.id
            }))
        }
    }
    const Totalprice = favorite.reduce((price, item) => price + item.qty * item.Price, 0)
    return (
        <>
        <h1 className='title'>Favoritos</h1>
        <div className='favoritecontainer'>
            {favorite.length === 0 && 
            <div className='emptyfavorite'>
            <h2 className='empty'>El carro está vacio</h2>
            <Link className='emptyfavoritebtn' to='/product'>Comprar ahora</Link>
            </div>}
            <div className='contant'>
                {
                    favorite.map((curElm) =>
                    {
                        return(
                            <div className='favorite_item' key={curElm.id}>
                                <div className='img_box'>
                                    <img src={curElm.Img} alt={curElm.Name}></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                    <h4>{curElm.Brand}</h4>
                                    <h3>{curElm.Name}</h3>
                                    <p>Precio COP {curElm.Price}</p>
                                    <div className='qty'>
                                        <button className='decqty' onClick={() => decqty(curElm)}>-</button>
                                        <input type='text' value={curElm.qty}></input>
                                        <button className=' incqty' onClick={() => incqty(curElm)}>+</button>
                                    </div>
                                    <h4 className='subtotal'>sub total: ${curElm.Price * curElm.qty}</h4>
                                    </div>
                                    <div className='close'>
                                    <button onClick={()=> removeproduct(curElm)}><IoMdClose /></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                favorite.length > 0 &&
                <>
                    <h2 className='totalprice'>Total: COP {Totalprice}</h2>
                    <button className='checkout'>Pago seguro <i><GiPadlock /></i></button>
                </>
            }
            </div>
        </>
    )
}

export default favorite
