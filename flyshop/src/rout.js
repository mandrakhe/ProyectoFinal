import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './components/pages/home';
import Product from './components/pages/product';
import Cart from './components/pages/cart';
const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product= {product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  )
}

export default Rout
