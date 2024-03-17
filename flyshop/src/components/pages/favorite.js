import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import '../../css/addFavorite.css'
import Footer from './../common/footer';

const Favorite = ({ favorite, setFavorite }) => {
    const removeProduct = (product) => {
        const exist = favorite.find((x) => x.id === product.id);
        if (exist && exist.qty > 0) {
            setFavorite(favorite.filter((x) => x.id !== product.id));
        }
    };

    return (
        <>
            <h1 className='favorite__title'>Favoritos</h1>
            <div className='favorite__cart-container'>
                {favorite.length === 0 &&
                    <div className='favorite__empty'>
                        <h2 className='favorite__empty-text'>Ningun producto ha sido añadido a favoritos</h2>
                        <Link className='favorite__empty-btn' to='/product'>Añadir ahora</Link>
                    </div>}
                <div className='favorite__content'>
                    {favorite.map((curElm) => (
                        <div className='favorite__item' key={curElm.id}>
                            <div className='favorite__img-box'>
                                <img src={curElm.Img} alt={curElm.Name} />
                            </div>
                            <div className='favorite__detail'>
                                <div className='favorite__info'>
                                    <h4>{curElm.Brand}</h4>
                                    <h3>{curElm.Name}</h3>
                                </div>
                                <div className='favorite__close'>
                                    <button onClick={() => removeProduct(curElm)}><IoMdClose /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Favorite;
