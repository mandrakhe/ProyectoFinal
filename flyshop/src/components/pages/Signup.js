import { Link } from "react-router-dom";
import "../../css/signup.css";
import logoBanner from '../../assets/images/logos/logo_banner.png'
import { useForm } from 'react-hook-form'
import { useAuth } from "../../context/AuthContext"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const { register, handleSubmit } = useForm();
    const { signup, isAuthenticathed, } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // if (isAuthenticathed) navigate('/');

    }, [isAuthenticathed, navigate])


    const onSubmited = handleSubmit((values) => {
        signup(values);
    })
    return (
        <>
            <div className="register">
                <img src={logoBanner} alt="Imagen-principal-signup" />
                <div className="contenedor-signup">
                    <h2 className="tittle">Registrate</h2>
                    <form  onSubmit={onSubmited}>
                        <div className="inputs">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" autoCapitalize="off" className="betita"
                            {...register("username", { required: true })} placeholder='Nombre' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Email</label>
                            <input type="email" autoCapitalize="off"
                            {...register("email", { required: true })} placeholder='email' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Contraseña</label>
                            <input type="password" 
                            {...register("password", { required: true })} placeholder='password' />
                        </div>
                        <button type="submit">Registrarse</button>
                    </form>
                    <div className="divider"> </div>
                    {/* <p>¿Ya tienes una cuenta?</p> */}
                    <p>¿Tienes cuenta en FLY SHOP?</p>
                    <Link to="/login">Iniciar Sesion</Link>
                </div>
            </div>
        </>
    );
}

export default Signup;
