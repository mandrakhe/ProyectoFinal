import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

import { Link } from 'react-router-dom';
const ProductPage = () => {
    const { fetchProduct, currentProduct } = useContext(ProductContext);
    const { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
    }, [fetchProduct, id]);

    return (

      <div className="product-page">
      {currentProduct ? (
        <>
          {currentProduct.images && currentProduct.images.length > 0 ? (
            <div className='images'>
              {currentProduct.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={currentProduct.title}
                />
              ))}
            </div>
          ) : (
            <p>No image available</p>
          )}
          <div className='detail__product-page'>
            <h2 className='detail info'>{currentProduct.brand}</h2>
            <h2 className='detail info'>{currentProduct.title}</h2>
            <p className='detail info price' >{currentProduct.price}</p>
            <span className='detail info'>{currentProduct.description}</span>
            <h4 className='detail info' >Tallas disponibles</h4>
            <h3 className='detail info'>{currentProduct.size}</h3>
            <button>Añadir al carrito</button>
            <button>Añadir a favorito</button>
            <button><Link to="/">Atrás</Link></button>


          </div>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
    );
  };
  
export default ProductPage;
