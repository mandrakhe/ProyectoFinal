import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Alert from '@mui/material/Alert';

import logoBanner from '../../assets/images/logos/logo_banner.png';
import '../../css/login.css';

function Login() {
    const { register, handleSubmit } = useForm();
    const { signin, errors, isAuthenticated } = useAuth();
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const onSubmited = handleSubmit(async (data) => {
        try {
            await signin(data);
        } catch (error) {
            setError(error);
        }
    });

    useEffect(() => {
        if (errors.length > 0) {
            setError(errors[0]);
        }
    }, [errors]);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
            window.location.reload(); 
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <img src={logoBanner} alt="Imagen principal" />
            <div className='login'>
                <div className='container-login' >
                    <h2 className='tittle'>Iniciar sesión</h2>
                    <form onSubmit={onSubmited}>
                        <div className="inputs">
                            <label htmlFor="password"></label>
                            <input type="email" placeholder='ingresa tu email' {...register("email", { required: true })} />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email"></label>
                            <input type="password" placeholder='Ingresa tu contraseña' {...register("password", { required: true })} />
                        </div>
                    {error && <Alert severity="error">{error}</Alert>}
                        <button type="submit">Aceptar</button>
                    </form>
                    <div className="divider"></div>
                    <p>¿No tienes cuenta de flyshop?</p>
                    <Link to="/register">Registrate</Link>
                </div>
            </div>
        </>
    )
}

export default Login;
