import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import './home.css'
import './product.css'
import { CiShoppingCart  } from "react-icons/ci";
import { GoEye    } from "react-icons/go";
import { IoMdHeartEmpty  } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Homeproduct from './homeproduct';
import Zapato from './images/4.jpg';
import Adidas from './images/zapatos/campus.png';
import Nike from './images/zapatos/nike.png';
import Jordan from './images/zapatos/jordan3.png';
import NB from './images/zapatos/nb.png';
import { useAuth0 } from "@auth0/auth0-react";
const Home = ({detail, view, close, setClose, addtocart}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
        {
            close ?
            <div className='product_detail'>
                <div className='container'>
                    <button onClick={() => setClose(false)} className='closebtn'><IoMdClose /></button>
                    {
                        detail.map((curElm)=>
                        {
                            return(
                                <div className='productbox'>
                                    <div className='img-box'>
                                        <img src={curElm.Img} alt={curElm.Name}></img>
                                    </div>
                                    <div className='detail'>
                                        <h4>{curElm.Brand}</h4>
                                        <h2>{curElm.Name}</h2>
                                        <p>Texto pero una cantidad exagerada de texto o sea en plan mucho pero mucho texto sin el más minimo sentido aparente pero igual ya veremos</p>
                                        <h3>{curElm.Price}</h3>
                                        <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                <div className='productbox'></div>
                </div>
            </div> : null
        }
    <div className='title'><h1>BIENVENIDOS A FLYSHOP</h1></div>
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The latest collection</h2>      
                <Link className='link' to='/product'>shop now <MdArrowRightAlt/></Link>   
            </div>
            <div className='img_box'>
                <img src={Zapato} alt='banner(deberia aparecer pero no aparece)'/>
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
          Homeproduct.map((curElm)=>{
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Name}></img>
                  <div className='icon'>
                    {
                        isAuthenticated ?

                        <li onClick={() => addtocart(curElm)}> <CiShoppingCart /></li>
                        :
                        <li onClick={() => loginWithRedirect()}> <CiShoppingCart /></li>
                      }
                    <li onClick={() => view(curElm)}><GoEye /></li>
                    <li><IoMdHeartEmpty /></li>
                  </div>
                </div>
                <div className='detail'>
                  <h3>{curElm.Name}</h3>
                  <p>{curElm.Brand}</p>
                  <p>{curElm.Price}</p>
                </div>
              </div>
            )
          })
        }
{/*       <div className='see'>
          <Link to='/product' className='see_button'>VER TODO<MdArrowRightAlt/></Link>
      </div> */}
      </div>
      <h4>LO MEJOR DE FLYSHOP</h4>
    </div>

    </>
  )
}

export default Home
