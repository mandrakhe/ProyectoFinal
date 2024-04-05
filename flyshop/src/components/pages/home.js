import Spline from '@splinetool/react-spline';
import React, { useContext } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import Footer from '../common/footer';

import { IoMdClose } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { PiHeartDuotone } from "react-icons/pi";

import '../../css/home.css';

import { useNavigate } from 'react-router-dom';
import Adidas from '../../assets/images/zapatos/campus.png';
import Jordan from '../../assets/images/zapatos/jordan3.png';
import NB from '../../assets/images/zapatos/nb.png';
import Nike from '../../assets/images/zapatos/nike.png';
import { CartContext } from '../../context/CartContext';
import { ProductContext } from '../../context/ProductContext';


const Home = ({ detail, view, close, setClose, addtocart, addtofavorite }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth();
  const { addProductToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`);
  };

  const addToCart = (_id) => {
    addProductToCart(_id);
  };

  return (
    <>
      {
        close ?
          <div className='product_detail'>
            <div className='container'>
              <button onClick={() => setClose(false)} className='closebtn'><IoMdClose/></button>
              {
                detail.map((object) => {
                  const imageUrl = object.images && object.images[0];
                  return (
                    <div key={object._id} className='productbox'>
                      <div className='img-box'>
                        {imageUrl ? (
                          <img src={imageUrl} alt={object.title} />
                            ):(
                          <p>No image available</p>
                        )}
                      </div>
                      <div className='detail'>
                        <h4>{object.brand}</h4>
                        <h2>{object.title}</h2>
                        <p>{object.description}</p>
                        <h3>$ {object.price} COP </h3>
                        <strong >Talla</strong><p>{object.size}</p>
                        <button id='button-detail' onClick={() => addToCart(object._id)}>Añadir al carrito</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div> : null
      }

      <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>FLYSHOP</h2>
            <h4>Be bold. Be you.</h4>
            <Link className='link' to='/product'>Compra ya! <MdArrowRightAlt /></Link></div>
          <div className='shoe-banner'>

          <Spline scene="https://prod.spline.design/HQQTK5PBXF3yH1TW/scene.splinecode" />


          </div>
        </div>
      </div>
      <div className='shoe_brand'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src={Adidas} alt='Adidas'/>
            </div>
            <div className='detail'>
              <button>ADIDAS</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Nike} alt='Nike'/>
            </div>
            <div className='detail'>
              <button>NIKE</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Jordan} alt='Jordan'/>
            </div>
            <div className='detail'>
              <button>JORDAN</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={NB} alt='NB'/>
            </div>
            <div className='detail'>
              <button>NEW BALANCE</button>
            </div>
          </div>
        </div>
      </div>
      <div className='product'>
        <h2>¡NO TE LO PIERDAS!</h2>
        <div className="cart-container">
          {
            products.slice(0, 8).map((object) => {
              const imageUrl = object.images && object.images[0];
              return (
                <div className="item">
                  <div className="img-box">
                    <PiHeartDuotone id='heart-icon'
                      onClick={
                        isAuthenticated
                          ? () => addtofavorite(object)
                          : () => loginWithRedirect()
                      }
                    />

                    <IoEyeOutline id='eye-icon'
                      onClick={() => view(object)}
                    />

                    {imageUrl ? (
                      <img src={imageUrl} alt={object.title} />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  <div className="details">
                    <h2 onClick={() => handleProductClick(object)}>
                      {object.title}
                      <br />
                    <div className="price">${object.price}</div>
                      <span>{object.brand}</span>
                    </h2>
                    <label>Tallas</label>
                    <ul>
                      <li>{object.size}</li>
                    </ul>
                    <button
                      onClick={
                        isAuthenticated
                          ? () => addToCart(object._id)
                          : () => loginWithRedirect()
                      }
                    >
                      Añadir al carrito
                    </button>
                    <div className='icons-detail'>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <h2>LO MEJOR DE FLYSHOP</h2>
        <div className="cart-container">
          {
            products.slice(9, 17).map((object) => {
              const imageUrl = object.images && object.images[0];
              return (
                <div className="item">
                  <div className="img-box">
                    <PiHeartDuotone id='heart-icon'
                      onClick={
                        isAuthenticated
                          ? () => addtofavorite(object)
                          : () => loginWithRedirect()
                      }
                    />

                    <IoEyeOutline id='eye-icon'
                      onClick={() => view(object)}
                    />

                    {imageUrl ? (
                      <img src={imageUrl} alt={object.title} />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  <div className="details">
                    <h2 onClick={() => handleProductClick(object)}>
                      {object.title}
                      <br />
                      <span>{object.description}</span>
                    </h2>
                    <div className="price">${object.price}</div>
                    <label>Tallas</label>
                    <ul>
                      <li>{object.size}</li>
                    </ul>
                    <button
                      onClick={
                        isAuthenticated
                          ? () => addToCart(object._id)
                          : () => loginWithRedirect()
                      }
                    >
                      Añadir al carrito
                    </button>

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

export default Home