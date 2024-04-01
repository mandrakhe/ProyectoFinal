import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { IoSearchOutline } from "react-icons/io5";
import '../../css/nav.css'
import { CiLogout, CiLogin, CiHeart } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import Logo from '../../assets/images/logos/logo_flyshop.png'

const Nav = ({ searchbtn }) => {
    const [search, setSearch] = useState('');
    const { setLogout, user, isAuthenticated } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`header ${isOpen ? 'open' : ''}`}>
                <div className='container-nav'>
                    <div className='nav'>
                    <div className='logo'  >
                            <Link to='/'><img src={Logo} alt='Logo de la empresa' /></Link>
                        </div>
                        <IoMenu className='hamburger-menu' onClick={handleToggleMenu} />
                        <ul className={isOpen ? 'open' : ''}>
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
                                    <Link className='link' to='/admin/listProduct'>Lista de productos</Link>
                            </li>
                            <li>
                                <Link className='link' to='/favorite'> <span>Favoritos</span> </Link>
                            </li>
                            <li>
                                <Link className='link' to='/cart'> <span>Carrito</span> </Link>
                            </li>
                        </ul>
                        <div className="search_container">
                            <div className="search_icon">
                                <button onClick={() => searchbtn(search)}><IoSearchOutline /></button>
                            </div>
                            <input className='search_input' type='search' value={search} placeholder='Buscar' autoComplete='off' onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <div className='icons-container'>
                            <Link className='link' to='/favorite'><CiHeart /></Link>
                            <Link className='link' to='/cart'><MdOutlineShoppingCart /></Link>
                        </div>
                        <div className='icon' >
                            {isAuthenticated &&
                                (
                                    <div className='account'>
                                        <div className='user_icon'>
                                            <CiUser />
                                        </div>
                                        <p>Hola, {user.username} :D</p>
                                    </div>
                                )
                            }
                        </div>
                        <div className='auth'>
                            {isAuthenticated ?
                                <button onClick={() => setLogout(window.location.reload())}><CiLogout /></button> :
                                <Link className='link-login' to='/login'><CiLogin /></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;