import React from 'react'
import {BiAccessibility  } from 'react-icons/bi';
import {CiHeart   } from 'react-icons/ci';
import {IoBag    } from 'react-icons/io5';
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
                <img src='../public/images/logos/logo_flyshop.png' alt='Logo de la empresa' ></img>
            </div>
            <div className='search_box'>
                <input type='text' value='' placeholder='Buscar' autoComplete='off' ></input>
                <button>Buscar</button>
            </div>
            <div className='icon' >
                <CiHeart/>
                <IoBag/>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default nav
