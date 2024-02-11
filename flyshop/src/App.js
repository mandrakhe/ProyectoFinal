import React, { useState } from 'react'
import Nav from './nav'
import Footer from './footer'
import Rout from './rout'
import {BrowserRouter} from 'react-router-dom';
import Productdetail from './productdetail';
const App = () => {

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
      alert("El producto ha sisdo añadido al carrito")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn}/>
        <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart} />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
