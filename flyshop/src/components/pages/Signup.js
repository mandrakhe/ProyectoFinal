import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";

import { useState } from "react";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from "../../context/AuthContext"

import { useNavigate } from 'react-router-dom';
import logoBanner from '../../assets/images/logos/logo_banner.png'
import "../../css/signup.css";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signup, isAuthenticated, } = useAuth();
  const navigate = useNavigate();
  const [errorsMessages, setErrorsMessages] = useState([]);

  useEffect(() => {
    if (isAuthenticated) navigate('/');

  }, [isAuthenticated, navigate])

  const onSubmited = handleSubmit(async (values) => {
    try {
      await signup(values);
      navigate('/');
      window.location.reload();
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        const newErrors = error.response.data.map(err => err.msg);
        setErrorsMessages(newErrors);
      } else {
        setErrorsMessages([error.response.data.msg]);
      }
    }
  })


  return (
    <>
      <div className="register">
        <img src={logoBanner} alt="Imagen-principal-signup" />
        <div className="container-signup">
          <h2 className="tittle">Registrate</h2>
          <form onSubmit={onSubmited}>
            <div className="inputs">
              <label htmlFor="name"> Nombre </label>
              <input type="text" autoCapitalize="off" className="betita"
                {...register("username", { required: true })} placeholder='Nombre' />
              {errors.username && <Alert severity="error">El nombre es obligatorio</Alert>}
            </div>
            <div className="inputs">
              <label htmlFor="password">Email</label>
              <input type="email" autoCapitalize="off"
                {...register("email", { required: true })} placeholder='email' />
              {errors.email && <Alert severity="error">El email es obligatorio</Alert>}
            </div>
            <div className="inputs">
              <label htmlFor="email">Contraseña</label>
              <input type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{6,12}$/,
                })} placeholder='password' />
              {errors.password && <Alert severity="error">La contraseña debe tener al menos una mayúscula, un número y mínimo 6 caracteres</Alert>}
            </div>
            {errorsMessages.length > 0 && errorsMessages.map((errorMessage, index) => (
              <Alert key={index} severity="error">{errorMessage}</Alert>
            ))}
            <button type="submit">Registrarse</button>
          </form>
          <div className="divider"> </div>
          <p>¿Tienes cuenta en FLY SHOP?</p>
          <Link to="/login">Iniciar Sesion</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;