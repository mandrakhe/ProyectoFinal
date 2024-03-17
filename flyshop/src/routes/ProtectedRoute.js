import { useAuth } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
    const { loading, isAuthenticated } = useAuth();

    if (loading) return <h1>Loading</h1>
    if (!loading && !isAuthenticated) return <Navigate to='/login' replace />
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ProtectedRoute
