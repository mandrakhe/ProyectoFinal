import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/common/nav.js';
import addProduct from './components/pages/admin/products/addProduct.js';
import { AuthProvider } from './context/AuthContext';
import { ProductContext } from './context/ProductContext.js';
import Rout from './routes/rout.js';

const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch products from ProductContext on component mount
    setProduct(ProductContext);
  }, []);

  const searchbtn = (product) => {
    const change = product.filter((x) => x.Brand === product);
    setProduct(change);
  };

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };




  const addFavorite = (product) => {
    const existingProductIndex = favorite.findIndex((x) => x._id === product._id);
    if (existingProductIndex !== -1) {
    } else {
      setFavorite([...favorite, { ...product }]);
    }
  };

  return (
    <>
       <BrowserRouter>
        <AuthProvider>
          <Nav searchbtn={searchbtn} />
        </AuthProvider>
        <ToastContainer />
        <Rout
          addProduct={addProduct}
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          favorite={favorite}
          setFavorite={setFavorite}
          addtofavorite={addFavorite}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
