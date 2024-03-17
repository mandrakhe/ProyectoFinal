import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
    const { loading, isAuthenticated, user } = useAuth();

    if (loading) return <h1>Loading...</h1>;
    if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

    if (!user || !user.Adminrole) { 
        return <Navigate to="/" replace />; 
    }

    return <Outlet />;
};

export default AdminRoute;
