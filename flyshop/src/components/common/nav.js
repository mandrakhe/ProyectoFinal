import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci';
import { IoBag } from 'react-icons/io5';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IoSearchOutline } from "react-icons/io5";
import Logo from '../../assets/images/logos/logo_flyshop.png'
import '../../css/nav.css'

const Nav = ({ searchbtn }) => {
    const [search, setSearch] = useState()
    const { setLogout, user, isAuthenticated } = useAuth();


    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <div className='logo'  >
                            <Link to='/'><img src={Logo} alt='Logo de la empresa' /></Link>
                        </div>
                        <ul>
                            <li>
                                <Link className='link' to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link className='link' to='/product'>Tienda</Link>
                            </li>
                            <li>
                                <Link className='link' to='https://wa.me/+573114042531?text=Hola mono pecueco >:('>Contáctanos</Link>
                            </li>
                            <li>
                                <Link className='link' to='/about'>¿Quiénes somos?</Link>
                            </li>
                        </ul>
                        <div className="search_container">
                            <div className="search_icon">
                            <button onClick={() => searchbtn(search)}><IoSearchOutline /></button>
                            </div>
                        <input className='search_input' type='search' value={search} placeholder='Buscar' autoComplete='off' onChange={(e) => setSearch(e.target.value)} ></input>
                    </div>
                <Link to='/favorite' className='link'><CiHeart /></Link>
                <Link to='/cart' className='link car'><IoBag /></Link>
                <div className='icon' >
                        {
                            isAuthenticated &&
                            (
                                <div className='account'>
                                    <div className='user_icon'>
                                        <CiUser />
                                    </div>
                                    <p>Hola, {user.username } :D</p>
                                </div>
                            )
                        }
                </div>
                <div className='auth'>
                        {
                            isAuthenticated ?
                                <button onClick={() => setLogout(  window.location.reload())}><CiLogout /></button>
                                :
                                <Link className='link-login' to='/login'><CiLogin /></Link>
                        }
                </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Nav