import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute"
import AdminRoute from './AdminRoute'


import Login from '../components/pages/login';
import Signup from '../components/pages/Signup';
import Home from '../components/pages/home';


import Product from '../components/pages/product';
import Favorite from '../components/pages/favorite';

import Cart from '../components/pages/cart';
import DetailProduct from '../components/pages/detailProduct';
import Contact from '../components/pages/contact';
import ProductPage from '../components/pages/productPage';

import { CartProvider } from '../context/CartContext';
import { ProductProvider } from '../context/ProductContext';
import { AuthProvider } from '../context/AuthContext';
import { UserProvider } from '../context/UserContext';
import { OrderProvider } from '../context/OrderContext';


import ShippingForm from '../components/pages/ShippingForm';
import Admin from '../components/pages/admin/dashboard';
import UserList from '../components/pages/admin/lists/userList';
import ProductList from '../components/pages/admin/lists/productList';
import AddProduct from '../components/pages/admin/products/addProduct';
import EditProduct from '../components/pages/admin/products/editProduct'
import OrdersPage from '../components/pages/admin/orderPage';



const Rout = ({ product, setProduct, detail, view, close, setClose, cart, setCart, addtocart, favorite, setFavorite, addtofavorite }) => {
  return (
    <>

      <AuthProvider>
        <UserProvider>
        <ProductProvider>
          <CartProvider>
            <OrderProvider>
            <Routes>
              <Route path="/product/:id" element={<ProductPage />} />
              {/* Register, Login, Home,Contactanos y ruta alterna */}
              <Route path='/register' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtofavorite={addtofavorite} />} />
              <Route path='*' element={<Home />} />
              <Route path='/detailProduct' element={<DetailProduct />} />

              {/* Metodos y funciones de los productos */}
              <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtofavorite={addtofavorite} />} />
              <Route path='/about' element={<Contact />} />

              
              <Route path='/checkout' element={<ShippingForm />} />
              {/* Funciones del administrador */}
              <Route element={<AdminRoute />}>
                <Route path='/admin' element={<Admin/>} />
                <Route path='/admin/addProduct' element={<AddProduct />} />
                <Route path='/admin/edit-product/:id' element={<EditProduct/>}  />
                <Route path="/admin/listProducts" element={<ProductList />} />
                <Route path="/admin/listUsers" element={<UserList />} />
                <Route path='/admin/orders' element={<OrdersPage/>} />
              </Route>


              {/* Rutas Protegidas (Requiere Autentificación) */}

              <Route element={<ProtectedRoute />}>
                <Route path='/favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite} />} />
                <Route path='/cart' element={<Cart cart={cart} />} />
              </Route>

            </Routes>
            </OrderProvider>
          </CartProvider>
        </ProductProvider>
        </UserProvider>
      </AuthProvider>
    </>
  )
}

export default Rout
