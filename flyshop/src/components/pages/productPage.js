import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import '../../css/productPage.css';
const ProductPage = () => {
    const { fetchProduct, currentProduct } = useContext(ProductContext);
    const { id } = useParams();

    useEffect(() => {
        fetchProduct(id);
    }, [fetchProduct, id]);

    return (
      <div  className="product-page">
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
          <h2>{currentProduct.brand}</h2>
          <h2>{currentProduct.title}</h2>
            <p>{currentProduct.price}</p>
            <span>{currentProduct.description}</span>
            <h4>Tallas disponibles</h4>
            <h3>{currentProduct.size}</h3>
            <button>Añadir al carrito</button>
            <button>Añadir a favorito</button>
            <button><Link to="/product">Atrás</Link></button>
            

          </div>
          </>
        ) : (
          <p>Cargando producto...</p>
        )}
      </div>
    );
  };
  
export default ProductPage;