import React from 'react'

import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";

import Footer from './../common/footer';

const Favorite = ({ favorite, setFavorite }) => {
    const removeproduct = (product) => {
        const exsit = favorite.find((x) => {
            return x.id === product.id
        })
        if (exsit.qty > 0) {
            setFavorite(favorite.filter((x) => {
                return x.id !== product.id
            }))
        }
    }
    return (
        <>
            <h1 className='title'>Favoritos</h1>
            <div className='cartcontainer'>
                {favorite.length === 0 &&
                    <div className='emptyfavorite'>
                        <h2 className='empty'>Ningun producto ha sido añadido a favoritos</h2>
                        <Link className='emptycartbtn' to='/product'>Añadir ahora</Link>
                    </div>}
                <div className='contant'>
                    {
                        favorite.map((curElm) => {
                            return (
                                <div className='favorite_item' key={curElm.id}>
                                    <div className='img_box'>
                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                    </div>
                                    <div className='detail'>
                                        <div className='info'>
                                            <h4>{curElm.Brand}</h4>
                                            <h3>{curElm.Name}</h3>
                                        </div>
                                        <div className='close'>
                                            <button onClick={() => removeproduct(curElm)}><IoMdClose /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Favorite
