import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from "./ProtectedRoute"

import { ProductProvider } from './context/ProductContext';

import Login from './components/pages/login';
import Signup from './components/pages/Signup';
import Home from './components/pages/home';
import ProductList from './components/pages/productList';

import Product from './components/pages/product';
import Favorite from './components/pages/favorite';
import Admin from './components/pages/admin';
import Cart from './components/pages/cart';
import AddProduct from './components/pages/addProduct';
import DetailProduct from './components/pages/detailProduct';




const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, favorite, setFavorite, addtofavorite }) => {
  return (
    <>

      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtofavorite={addtofavorite} />} />
            <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtofavorite={addtofavorite} />} />


            <Route path='/listProduct' element={<ProductList />} />
            <Route path='/detailProduct' element={<DetailProduct />} />


            <Route path='/favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite} />} />
            <Route path='/addProduct' element={<AddProduct />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />

            <Route element={<ProtectedRoute />}>
            </Route>
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default Rout
