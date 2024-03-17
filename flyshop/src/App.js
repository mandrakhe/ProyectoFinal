import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Alert from '@mui/material/Alert';
import Rout from './rout.js';
import Nav from './components/common/nav.js';
import Productdetail from './productdetail';
import addProduct from './components/pages/addProduct.js';

const App = () => {
  const [favorite, setFavorite] = useState([]);
  const [cart, setCart] = useState([]);
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  const [product, setProduct] = useState(Productdetail);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success'); // Estado para el nivel de severidad de la alerta

  const searchbtn = (product) => {
    const change = Productdetail.filter((x) => x.Brand === product);
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
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      showAlert('Este producto ya se encuentra añadido al carrito', 'error');
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      showAlert('El producto ha sido añadido al carrito', 'success');
    }
  };

  const addFavorite = (product) => {
    const exist = favorite.find((x) => x.id === product.id);
    if (exist) {
      showAlert('Este producto ya se encuentra añadido a favoritos', 'error');
    } else {
      setFavorite([...favorite, { ...product, qty: 1 }]);
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
