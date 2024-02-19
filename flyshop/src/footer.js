import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from './images/logos/logo_flyshop.png';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src={Logo} alt='logo'/>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>Cuenta</h3>
                        <ul>
                            <li>Pedidos</li>
                            <li>Favoritos</li>
                            <li>Mi cuenta</li>
                            <li>Carrito de compras</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Pagina</h3>
                        <ul>
                            <li>Inicio</li>
                            <li>Tienda</li>
                            <li>Contáctanos</li>
                        </ul>
                    </div>
                        <div className='detail'>
                            <div className='icon'>
                                <li><IoLogoInstagram /></li>
                                <li><FaWhatsapp /></li>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer