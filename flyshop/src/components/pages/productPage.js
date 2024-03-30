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
              <div className='imagenes'>
                {currentProduct.images.map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={currentProduct.title}
                    style={{ width: '200px', margin: '10px' }}
                  />
                ))}
              </div>
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
