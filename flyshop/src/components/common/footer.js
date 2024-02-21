import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import Logo from '../../images/logos/logo_flyshop.png';
import '../../css/footer.css'
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63455.4175140991!2d-75.5859456!3d6.2685184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44291d48efad4b%3A0x4b97b19284a6140!2sMALL%20MINORISTA%20PLAZA!5e0!3m2!1ses-419!2sco!4v1708539851262!5m2!1ses-419!2sco" width="450" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer