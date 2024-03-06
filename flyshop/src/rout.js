import React from 'react'
import {Routes,Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./ProtectedRoute"

import Login from './components/pages/login';
import Signup from './components/pages/Signup';
import Home from './components/pages/home';

import Product from './components/pages/product';
import Cart from './components/pages/cart';
import AddProduct from './components/pages/addProduct';
import Addfavorite from './components/pages/favorite';

const Rout = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path='/register' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product= {product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />}/>
        <Route path='/addFavorite' element={<Addfavorite/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

        
        <Route element={<ProtectedRoute />}>
        </Route>
      </Routes>
      </AuthProvider>
    </>
  )
}

export default Rout
