import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from "./ProtectedRoute"
import AdminRoute from './AdminRoute';

import { ProductProvider } from '../context/ProductContext';

import Login from '../components/pages/login';
import Signup from '../components/pages/Signup';
import Home from '../components/pages/home';
import ProductList from '../components/pages/admin/productList';

import Product from '../components/pages/product';
import Favorite from '../components/pages/favorite';
import Admin from '../components/pages/admin';
import Cart from '../components/pages/cart';
import AddProduct from '../components/pages/addProduct';
import DetailProduct from '../components/pages/detailProduct';

import ProductPage from '../components/pages/productPage';


const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, favorite, setFavorite, addtofavorite }) => {
  return (
    <>

      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path="/product/:id" element={<ProductPage/>} />
            {/* Register, Login, Home y ruta alterna */}
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtofavorite={addtofavorite} />} />
            <Route path='*' element={<Home/>} /> 
            <Route path='/detailProduct' element={<DetailProduct />} />

            {/* Metodos y funciones de los productos */}
            <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtofavorite={addtofavorite} />} />



              <Route path='/admin/addProduct' element={<AddProduct />} />
              <Route path="/admin/listProduct" element={<ProductList />} />
            {/* Funciones del administrador */}
            <Route element={<AdminRoute />}>
              <Route path='/admin' element={<Admin />} />
            </Route>
            

            {/* Rutas Protegidas (Requiere Autentificación) */}

            <Route element={<ProtectedRoute />}>
              <Route path='/favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite} />} />
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
            </Route>

          </Routes>
        </ProductProvider>
      </AuthProvider>
    </>
  )
}

export default Rout
