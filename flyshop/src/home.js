import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";
import './home.css'
import { FiTruck } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { ImHeadphones } from "react-icons/im";
import Homeproduct from './homeproduct';
const Home = () => {
  const [homeproduct, setHomeProduct] = useState(Homeproduct)
  return (
    <>
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>the latest collection</h2>      
                <Link className='link' to='/product'>shop now <MdArrowRightAlt/></Link>   
            </div>
            <div className='img_box'>
                <img src='../public/images/1.jpg' alt='banner(deberia aparecer pero no aparece)'></img>
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
      <div className='container'>
        {
          homeproduct.map((curElm)=>{
            return(
              <div className='box' key={curElm.id}>
                <div className='img_box'>
                  <img src={curElm.Img} alt={curElm.Name}></img>
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
    </>
  )
}

export default Home
