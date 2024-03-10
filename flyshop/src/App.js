import React, { useState } from 'react'
import Nav from './components/common/nav.js'
import Rout from './rout.js'
import {BrowserRouter} from 'react-router-dom';
import Productdetail from './productdetail';
import addProduct from './components/pages/addProduct.js';
import { AuthProvider } from './context/AuthContext';
const App = () => {

  /* funciones */

  const[favorite, setFavorite] = useState([])
  const[cart, setCart] = useState([])




  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])




  const [product,setProduct]=useState(Productdetail)
  const searchbtn = (product) =>
  {
    const  change =Productdetail.filter((x) =>
    {
      return x.Brand === product
    })
    setProduct(change)
  }

  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }



  const addtocart = (product) =>
  {
    const exsit = cart.find((x)=>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("Este producto ya se encuentra añadido al carrito")
    }
    else
    {
      setCart([...cart, {...product, qty:1}])
      alert("El producto ha sido añadido al carrito")
    }
  }

  const addFavorite = (product) =>
  {
    const exsit = favorite.find((x)=>
    {
      return x.id === product.id
    })
    if(exsit)
    {
      alert("Este producto ya se encuentra añadido a favoritos")
    }
    else
    {
      setFavorite([...favorite, {...product, qty:1}])
      alert("El producto ha sido añadido a favoritos")
    }
  }

  

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav searchbtn={searchbtn}/>
        </AuthProvider>
        <Rout addProduct={addProduct} product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} favorite={favorite} setFavorite={setFavorite} addtofavorite={addFavorite} />
      </BrowserRouter>
    </>
  )
}

export default App
