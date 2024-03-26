import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

const ProductPage = () => {
    const { fetchProduct, currentProduct } = useContext(ProductContext);
    const { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
    }, [id]);

    return (
        <div>
            {currentProduct ? (
                <>
                    {currentProduct.images && currentProduct.images.length > 0 ? (
                        <img src={currentProduct.images[0]} alt={currentProduct.title} />
                    ) : (
                        <p>No image available</p>
                    )}
                    <h2>{currentProduct.title}</h2>
                    <p>{currentProduct.description}</p>
                    <p>{currentProduct.price}</p>
                    <button>Añadir al carrito</button>
                </>
            ) : (
                <p>Cargando producto...</p>
            )}
        </div>
    );
};

export default ProductPage;
