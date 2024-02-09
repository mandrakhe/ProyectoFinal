import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import './footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logo.svg' alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>Información relacionada a flyshop y ese poco de vainas</p>
                    <div className='icon'>
                        <li><FaFacebookF /></li>
                        <li><IoLogoInstagram /></li>
                        <li><FaXTwitter /></li>
                        <li><RiTiktokLine /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Term & Condition</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
