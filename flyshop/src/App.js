import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Alert from '@mui/material/Alert';
import Rout from './routes/rout.js';
import Nav from './components/common/nav.js';
import { ProductContext } from './context/ProductContext.js';
import addProduct from './components/pages/addProduct.js';

const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

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

  const showAlert = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);

    // Ocultar la alerta después de 1 segundo
    setTimeout(() => {
      setAlertMessage('');
    }, 1500);
  };

  const addtocart = (product) => {
    const existingProductIndex = cart.findIndex((x) => x._id === product._id);
    if (existingProductIndex !== -1) {
      showAlert('Este producto ya se encuentra añadido al carrito', 'error');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      showAlert('El producto ha sido añadido al carrito', 'success');
    }
  };

  const addFavorite = (product) => {
    const existingProductIndex = favorite.findIndex((x) => x._id === product._id);
    if (existingProductIndex !== -1) {
      showAlert('Este producto ya se encuentra añadido a favoritos', 'error');
    } else {
      setFavorite([...favorite, { ...product }]); // Removed qty from favorite
      showAlert('El producto ha sido añadido a favoritos', 'success');
    }
  };

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Nav searchbtn={searchbtn} />
        </AuthProvider>
        <div style={{ position: 'fixed', top: '20px', right: '20px', maxWidth: '400px', width: '100%', height: 'auto', zIndex: '1', alignItems: 'center', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          {alertMessage && (
            <Alert severity={alertSeverity} sx={{ width: '100%', borderRadius: '8px', fontSize: '1rem' }}>
              {alertMessage}
            </Alert>
          )}
        </div>

        <Rout
          addProduct={addProduct}
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
          favorite={favorite}
          setFavorite={setFavorite}
          addtofavorite={addFavorite}
        />
      </BrowserRouter>
    </>
  );
};

export default App;
