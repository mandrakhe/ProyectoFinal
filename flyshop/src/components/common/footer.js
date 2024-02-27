import React from "react";
import "../../css/footer.css";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import Logo from '../../assets/images/logos/logo_flyshop.png'
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <img src={Logo} alt="logo" />
                    <div className="contact">
                        <div className="account">
                            <h3>Cuenta</h3>
                            <ul>
                                <li>Pedidos</li>
                                <li>Favoritos</li>
                                <li>Mi cuenta</li>
                                <li>Carrito de compras</li>
                            </ul>
                        </div>
                        <div className="page">
                            <h3>Página</h3>
                            <ul>
                                <li>Inicio</li>
                                <li>Tienda</li>
                                <li>Contáctanos</li>
                            </ul>
                        </div>
                        <div className="icons">
                            <IoLogoInstagram className="icon" />
                            <FaWhatsapp className="icon" />
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63455.4175140991!2d-75.5859456!3d6.2685184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44291d48efad4b%3A0x4b97b19284a6140!2sMALL%20MINORISTA%20PLAZA!5e0!3m2!1ses-419!2sco!4v1708539851262!5m2!1ses-419!2sco" width="550" height="200" allowfullscreen="" loading="lazy" referrerpolicy="origin"></iframe>
                </div>
            </div>
        </>
    );
};

export default Footer;