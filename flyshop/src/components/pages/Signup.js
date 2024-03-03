import { Link } from "react-router-dom";
import "../../css/signup.css";
import logoBanner from '../../assets/images/logos/logo_banner.png'

function Signup() {
    return (
        <>
            <div className="register">
                <img src={logoBanner} alt="Imagen principal" />
                <div className="contenedor-signup">
                    <h2 className="tittle">Registrate</h2>
                    <form >
                        <div className="inputs">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" autoCapitalize="off" className="betita" name="email" />
                        </div>
                        <div className="inputs">
                            <label htmlFor="password">Nombre</label>
                            <input type="text" autoCapitalize="off" name="email" />
                        </div>
                        <div className="inputs">
                            <label htmlFor="email">Contraseña</label>
                            <input type="password" name="password" />
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
