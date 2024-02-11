import React, { useState } from 'react'
import { BiAccessibility } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { IoBag } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { IoSearchOutline } from "react-icons/io5";
/* import { logo } from '../public/images/logos/logo_flyshop.png'; */
import './nav.css'
const Nav = ({ searchbtn }) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className='free'>
                <div className='icon' >
                    <BiAccessibility />
                </div>
                <p>  Free Shipping on All Orders</p>
            </div>

            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <div className='logo'  >
                            <img src="#" alt='Logo de la empresa' />
                        </div>
                        <ul>
                            <li>
                                <Link className='link' to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link className='link' to='/product'>Tienda</Link>
                            </li>
                            <li>
                                <Link className='link' to='/contact'>Contáctanos</Link>
                            </li>
                            <li>
                                <Link className='link' to='/about'>¿Quiénes somos?</Link>
                            </li>
                        </ul>
                            <Link to='/' className='link heart'><CiHeart /></Link>
                            <Link to='/cart' className='link'><IoBag /></Link>
                        <div class="search_container">
                            <div class="search_icon">
                            <button onClick={() => searchbtn(search)}><IoSearchOutline /></button>
                            </div>
                        <input className='search_input' type='search' value={search} placeholder='Buscar' autoComplete='off' onChange={(e) => setSearch(e.target.value)} ></input>
                        <div className='icon' >
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <FaRegUserCircle />
                                    </div>
                                    <p>Hola, {user.name} :D</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
                    </div>
                    <div className='auth'>
                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button>
                                :
                                <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                        }
                    </div>
            </div>
        </>
    )
}

export default Nav
