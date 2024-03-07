import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import { Link } from 'react-router-dom'
import '../../css/login.css'
import logoBanner from '../../assets/images/logos/logo_banner.png'

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit } = useForm();

    const { signin, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate('/');
    }, [isAuthenticated, navigate])



    const onSubmited = handleSubmit(async (data) => {
        signin(data);
    })
    return (
        <>
            <img src={logoBanner} alt="Imagen principal" />
            <div className='login'>     
                <div className='contenedor-login' >
                    <h2 className='tittle'>Iniciar sesión</h2>
                    <form onSubmit={onSubmited}>
                        <div className="inputs">
                            <label htmlFor="password"></label>
                            <input type="email" placeholder='ingresa tu email' 
                            {...register("email", { required: true })}  />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email"></label>
                            <input type="password" placeholder='Ingresa tu contraseña'
                            {...register("password", { required: true })}/>
                        </div>
                        <button type="submit" >Aceptar</button>
                    </form>
                    <div className="divider"></div>
                    <p > ¿ No tienes cuenta de flyshop ?</p>
                    <Link to="/register" >Registrate</Link>
                </div>
            </div>
        </>
    )
}

export default Login;