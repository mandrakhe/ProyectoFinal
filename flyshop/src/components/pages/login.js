import { Link } from 'react-router-dom'
import '../../css/login.css'
import logoBanner from '../../assets/images/logos/logo_banner.png'

function Login() {
    return (
        <>
            <img src={logoBanner} alt="Imagen principal" />
            <div className='login'>
                <div className='contenedor-login' >
                    <h2 className='tittle'>Iniciar sesión</h2>
                    <form >
                        <div className="inputs">
                            <label htmlFor="password"></label>
                            <input type="text" placeholder='Ingresa tu Gmail' autoCapitalize='off' name='email' />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email"></label>
                            <input type="password" placeholder='Ingresa tu contraseña' name='password' />
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