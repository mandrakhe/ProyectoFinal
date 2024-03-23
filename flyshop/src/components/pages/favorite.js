import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdClose } from "react-icons/io";
import '../../css/addFavorite.css'
import Footer from './../common/footer';

const Favorite = ({ favorite, setFavorite }) => {
    const removeProduct = (product) => {
        const exist = favorite.find((x) => x.id === product._id);
        if (exist && exist.qty > 0) {
            setFavorite(favorite.filter((x) => x.id !== product._id));
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
                    {favorite.map((object) => {
                        const imageUrl = object.images && object.images[0];
                        return(
                        <div className='favorite__item' key={object._id}>
                            <div className='favorite__img-box'>
                                {imageUrl ? ( // Conditionally render the image if a URL exists
                                    <img src={imageUrl} alt={object.title} />
                                ) : (
                                    <p>No image available</p> // Display a placeholder if no image URL is found
                                )}
                            </div>
                            <div className='favorite__detail'>
                                <div className='favorite__info'>
                                    <h3>{object.title}</h3>
                                    <h4>{object.brand}</h4>
                                </div>
                                <div className='favorite__close'>
                                    <button onClick={() => removeProduct(object)}><IoMdClose /></button>
                                </div>
                            </div>
                        </div>
                    )})}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Favorite;
