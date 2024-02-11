import React from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import './home.css'
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { CiShoppingCart  } from "react-icons/ci";
import { GoEye    } from "react-icons/go";
import { ImHeadphones } from "react-icons/im";
import { IoMdHeartEmpty  } from "react-icons/io";
import Homeproduct from './homeproduct';
import Zapato from './images/4.jpg';
const Home = () => {

  return (
    <>
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>the latest collection</h2>      
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
            <img src='../public/images/' alt='Adidas'></img>
          </div>
          <div className='detail'>
            <p>13 productos</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='../public/images/' alt='Nike'></img>
          </div>
          <div className='detail'>
            <p>23 productos</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='../public/images/' alt='Jordan'></img>
          </div>
          <div className='detail'>
            <p>33 productos</p>
          </div>
        </div>
        <div className='box'>
          <div className='img_box'>
            <img src='../public/images/' alt='NB'></img>
          </div>
          <div className='detail'>
            <p>43 productos</p>
          </div>
        </div>
      </div>
    </div>
    <div className='about'>
      <div className='container'>
        <div className='box'>
          <div className='icon'>
            <FiTruck />
          </div>
          <div className='detail'>
            <h3>Free Shipping</h3>
            <p>Oder above $1000</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <BsCurrencyDollar />
          </div>
          <div className='detail'>
            <h3>Return & Refund</h3>
            <p>Money Back Gaurenty</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <CiPercent />
          </div>
          <div className='detail'>
            <h3>Member Discount</h3>
            <p>On every order</p>
          </div>
        </div>
        <div className='box'>
          <div className='icon'>
            <ImHeadphones />
          </div>
          <div className='detail'>
            <h3>Customer Support</h3>
            <p>Every Time Call Support</p>
          </div>
        </div>
      </div>
    </div>
    <div className='product'>
      <h2>Top produt</h2>
      <div className='container'>
        {
          Homeproduct.map((curElm)=>{
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Name}></img>
                  <div className='icon'>
                    <li> <CiShoppingCart /></li>
                    <li><GoEye /></li>
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
      </div>
    </div>
    <div className='banner'>
      <div className='container'>
      <div className='detail'>
        <h4>LATEST PRODUCT ADDED</h4>
        <h3>Apple ipad  10.2</h3>
        <p>$986</p>
        <Link to='/product' className='link'>Shop Now    <MdArrowRightAlt/></Link>
        <p><BsCurrencyDollar/>4312</p>
      </div>
      <div className='img_box'>
        <img src='' alt=''></img>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
