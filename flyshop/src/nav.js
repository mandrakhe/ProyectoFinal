import React, { useState } from 'react'
import { BiAccessibility } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { IoBag } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
/* import { logo } from '../public/images/logos/logo_flyshop.png'; */
import './nav.css'
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    
  return (
    <>
      <div className='free'>
      
            <div className='icon' >
                <BiAccessibility/>
            </div>
            <p>  Free Shipping on All Orders</p>
      </div>
    <div className='main_header' >
        <div className='container' >
            <div  className='logo'  >
                <img src="#" alt='Logo de la empresa' />
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Buscar' autoComplete='off' onChange={(e)=>setSearch(e.target.value)} ></input>
                <button onClick={() => searchbtn (search)}>Buscar</button>
            </div>
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
                
                <div className='second_icon'>
                    <Link to='/' className='link'><CiHeart/></Link>
                    <Link to='/cart' className='link'><IoBag/></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Inicio</Link>
                </li>
                <li>
                    <Link to='/product' className='link'>Tienda</Link>
                </li>
                <li>
                    <Link to='/about' className='link'>Acerca de</Link>
                </li>
                <li>
                    <Link to='/contact' className='link'>Contactanos</Link>
                </li>
            </ul>
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
    </div>  
    </>
  )
}

export default Nav
