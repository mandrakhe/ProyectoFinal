import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../common/footer'
// import Homeproduct from '../../homeproduct'
import { useAuth } from "../../context/AuthContext"

import { GoEye } from "react-icons/go"
import { IoMdClose } from "react-icons/io"
import { IoMdHeartEmpty } from "react-icons/io"
import { MdArrowRightAlt } from "react-icons/md"

import '../../css/home.css'
import '../../css/product.css'

import NB from '../../assets/images/zapatos/nb.png'
import Nike from '../../assets/images/zapatos/nike.png'
import Adidas from '../../assets/images/zapatos/campus.png'
import Jordan from '../../assets/images/zapatos/jordan3.png'
import Zapato from '../../assets/images/logos/logo_banner.png'
import { ProductContext } from '../../context/ProductContext'

const Home = ({ detail, view, close, setClose, addtocart, addtofavorite }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth();
  const { products } = useContext(ProductContext);

  return (
    <>
      {
        close ?
          <div className='product_detail'>
            <div className='container'>
              <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
              {
                detail.map((object) => {
                  return (
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={(object.Img)} alt={object.Name}></img>
                      </div>
                      <div className='detail'>
                        <h4>{object.Brand}</h4>
                        <h2>{object.Name}</h2>
                        <p>Texto pero una cantidad exagerada de texto o sea en plan mucho pero mucho texto sin el más minimo sentido aparente pero igual ya veremos</p>
                        <h3>Precio: <span>{object.Price} COP</span> </h3>
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
          <div className='img_box'>
            <img src={Zapato} alt='zapato del banner' />
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
        <div className='container'>
          {
            products.map((object) => {
              const imageUrl = object.images && object.images[0];
              return (

                <div className='box' key={object.id}>

                  <div className='img_box'>

                    {imageUrl ? ( // Conditionally render the image if a URL exists
                      <img src={imageUrl} alt={object.title} />
                    ) : (
                      <p>No image available</p> // Display a placeholder if no image URL is found
                    )}
                    <div className='icon'>
                      <li onClick={() => view(object)}><GoEye /></li>
                      <li
                        onClick={
                          isAuthenticated
                            ? () => addtofavorite(object)
                            : () => loginWithRedirect()
                        }

                      ><IoMdHeartEmpty /></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <h3>{object.title}</h3>
                    <p>{object.brand}</p>
                    <p>{object.price}</p>
                    <button
                      onClick={
                        isAuthenticated
                          ? () => addtocart(object)
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