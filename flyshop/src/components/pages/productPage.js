import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useAuth } from "../../context/AuthContext"
import { ProductContext } from '../../context/ProductContext';
import '../../css/productPage.css';

const ProductPage = () => {
  const { fetchProduct, currentProduct } = useContext(ProductContext);
  const { id } = useParams();
  const { isAuthenticated, loginWithRedirect } = useAuth();
  const { addProductToCart } = useContext(CartContext);
  const addToCart = (_id) => {
    addProductToCart(_id);
  };
 
  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  return (

    <div className="product-page">
      {currentProduct ? (
        <>
<div className='images'>
  <div className='first-image'>
      <img src={currentProduct.images[0]} alt={currentProduct.title}></img>
  </div>
          <img src={currentProduct.images[1]} alt={currentProduct.title}></img>
          <img src={currentProduct.images[2]} alt={currentProduct.title}></img>
          <img src={currentProduct.images[3]} alt={currentProduct.title}></img>
</div>

          <div className='detail__product-page'>
            <span>{currentProduct.brand}</span>
            <h2 className='info'>{currentProduct.title}</h2>
            <p className='info'>Precio: {currentProduct.price}COP</p>
            <h4 className='info'>Tallas disponibles <b className='info'>{currentProduct.size}</b></h4>
            <p className='info description'>{currentProduct.description}</p>
            <div className='buttons'>
            <MdOutlineShoppingCart id='cart'
            onClick={
              isAuthenticated
                ? () => addToCart(currentProduct._id)
                : () => loginWithRedirect()
            }
            
            />

              <button>COMPRAR</button>
              <button><Link to="/">Atrás</Link></button>

            </div>
          </div>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ProductPage;