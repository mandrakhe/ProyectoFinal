import React from 'react'
import {BiAccessibility  } from 'react-icons/bi';
import {CiHeart   } from 'react-icons/ci';
import {IoBag    } from 'react-icons/io5';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './nav.css'
const nav = () => {
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
                <img src='./' alt='Logo de la empresa' ></img>
            </div>
            <div className='search_box'>
                <input type='text' value='' placeholder='Buscar' autoComplete='off' ></input>
                <button>Buscar</button>
            </div>
            <div className='icon' >
                <div className='account'>
                    <div className='user_icon'>
                        <FaRegUserCircle />
                    </div>
                    <p>Hello, User</p>
                </div>
                <div className='second_icon'>
                    <Link to='/' className='link'><CiHeart/></Link>
                    <Link to='/cart' className='link'><IoBag/></Link>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='contact'>
            <ul>
                <li>
                    <Link to='/' className=''>Home</Link>
                </li>
                <li>
                    <Link to='/product' className=''>Productos</Link>
                </li>
                <li>
                    <Link to='/about' className=''>Acerca de</Link>
                </li>
                <li>
                    <Link to='/contact' className=''>Contacto</Link>
                </li>
            </ul>
        </div>
    </div>  
    </>
  )
}

export default nav
