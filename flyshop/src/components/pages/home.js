import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../common/footer'
import { useAuth } from "../../context/AuthContext"
import Spline from '@splinetool/react-spline';
import { IoEyeOutline } from "react-icons/io5";

import { IoMdClose } from "react-icons/io"
import { PiHeartDuotone } from "react-icons/pi";
import { MdArrowRightAlt } from "react-icons/md"

import '../../css/home.css'
import '../../css/product.css'

import NB from '../../assets/images/zapatos/nb.png'
import Nike from '../../assets/images/zapatos/nike.png'
import Adidas from '../../assets/images/zapatos/campus.png'
import Jordan from '../../assets/images/zapatos/jordan3.png'
import { ProductContext } from '../../context/ProductContext'
import { useNavigate } from 'react-router-dom';

const Home = ({ detail, view, close, setClose, addtocart, addtofavorite }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth();
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`);
  };

  return (
    <>
      {
        close ?
          <div className='product_detail'>
            <div className='container'>
              <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
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
                        <h2>{object.name}</h2>
                        <p>{object.description}</p>
                        <h3>Precio: <span>{object.price} COP</span> </h3>
                        <strong >Talla</strong>
                        <button id='button-detail' onClick={() => addtocart(object)}>Añadir al carrito</button>
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
          <Spline scene="https://prod.spline.design/HQQTK5PBXF3yH1TW/scene.splinecode" />

          </div>
        </div>
      </div>
      <div className='shoe_brand'>
        <div className='container'>
          <div className='box'>
            <div className='img_box'>
              <img src={Adidas} alt='Adidas'></img>
            </div>
            <div className='detail'>
              <button>ADIDAS</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Nike} alt='Nike'></img>
            </div>
            <div className='detail'>
              <button>NIKE</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={Jordan} alt='Jordan'></img>
            </div>
            <div className='detail'>
              <button>JORDAN</button>
            </div>
          </div>
          <div className='box'>
            <div className='img_box'>
              <img src={NB} alt='NB'></img>
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
            products.map((object) => {
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
                    {/* <label>Color</label>
            <ul class="colors">
              <li></li>
              <li></li>
              <li></li>
            </ul> */}
                    <button
                      onClick={
                        isAuthenticated
                          ? () => addtocart(object)
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
      </div>
      {/* <Spline scene="https://prod.spline.design/ZJeZC8OSKmaFHxZt/scene.splinecode" /> */}

    

      
      <Footer />
    </>
  )
}

export default Home