import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Rout from './routes/rout.js';
import Nav from './components/common/nav.js';
import { ProductContext } from './context/ProductContext.js';
import addProduct from './components/pages/admin/products/addProduct.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const showAlert = (message, type = 'success') => {
    toast[type](message);
  };


  const addFavorite = (product) => {
    const existingProductIndex = favorite.findIndex((x) => x._id === product._id);
    if (existingProductIndex !== -1) {
      showAlert('Este producto ya se encuentra añadido a favoritos', 'error');
    } else {
      setFavorite([...favorite, { ...product }]);
      showAlert('El producto ha sido añadido a favoritos', 'success');
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
