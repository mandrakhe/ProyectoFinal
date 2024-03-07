import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest, logoutRequest  } from "../api/auth";
import Cookies from 'js-cookie';

export const AuthContext = createContext();


export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    /*
    1, imprimir por consola la response de la api
    2, ver las respuestas de los errores y como sale la respuesta cuando hace la accion determiana (correcto)
    3, asignar los errores a el useState de erres
    4, asignar la response a el useState correspondiente
    */ 

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
            error.response.data.map((error) => {
                setErrors((ant) => {
                    return [
                        ...ant,
                        error
                    ]
                })
            })
        }
    }

    const signin = async (user) =>{
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error);
            if(Array.isArray(error.response.data)){
                //Probar si funciona solo con esto y sin usar el if
                setErrors(error.response.data)
            }
            setErrors([error.response.data.message]);
        }
    }

    const setLogout = async (user) =>
    {
        try{
            const res = await logoutRequest(user);
            setIsAuthenticated(false);
            setUser(res);
        }
        catch (error){
            console.log(error);
        }
    }

    useEffect(() =>{
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() =>{
        async function checkLogin()
        {
            const cookies = Cookies.get();

            if(!cookies.token){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
    
            try {
                const res = await verifyTokenRequest(cookies.token)
                console.log(res)
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false)
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    },[])

    return(
        <AuthContext.Provider value={{
            signup,
            user,
            signin,
            setLogout,
            isAuthenticated,
            errors,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}