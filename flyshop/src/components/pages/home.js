import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md"
import Footer from '../common/footer'
import '../../css/home.css'
import '../../css/product.css'
import { GoEye } from "react-icons/go"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoMdClose } from "react-icons/io"
import Homeproduct from '../../homeproduct'
import Zapato from '../../assets/images/logos/logo_banner.png'
import Adidas from '../../assets/images/zapatos/campus.png'
import Nike from '../../assets/images/zapatos/nike.png'
import Jordan from '../../assets/images/zapatos/jordan3.png'
import NB from '../../assets/images/zapatos/nb.png'
import { useAuth } from "../../context/AuthContext"


const Home = ({ detail, view, close, setClose, addtocart, addtofavorite }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth();


  return (
    <>
      {
        close ?
          <div className='product_detail'>
            <div className='container'>
              <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
              {
                detail.map((curElm) => {
                  return (
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={(curElm.Img)} alt={curElm.Name}></img>
                      </div>
                      <div className='detail'>
                        <h4>{curElm.Brand}</h4>
                        <h2>{curElm.Name}</h2>
                        <p>Texto pero una cantidad exagerada de texto o sea en plan mucho pero mucho texto sin el más minimo sentido aparente pero igual ya veremos</p>
                        <h3>{curElm.Price}</h3>
                        <h3>Tallas</h3>
                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                      </div>
                    </div>
                  )
                })
              }
              {/* <div className='productbox'></div> */}
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
            Homeproduct.map((curElm) => {
              return (
                <div className='box' key={curElm.id}>
                  {/* <img src='./assets/images/zapatos/campus.png' alt='prueba' /> */}
                  <div className='img_box'>

                    <img src={curElm.Img} alt={curElm.Name} />
                    <div className='icon'>
                      <li onClick={() => view(curElm)}><GoEye /></li>
                      <li
                        onClick={
                          isAuthenticated
                            ? () => addtofavorite(curElm)
                            : () => loginWithRedirect()
                        }

                      ><IoMdHeartEmpty /></li>
                    </div>
                  </div>
                  <div className='detail'>
                    <h3>{curElm.Name}</h3>
                    <p>{curElm.Brand}</p>
                    <p>{curElm.Price}</p>
                    <button
                      onClick={
                        isAuthenticated
                          ? () => addtocart(curElm)
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
        <h4>LO MEJOR DE FLYSHOP</h4>
      </div>

      <Footer />
    </>
  )
}

export default Home