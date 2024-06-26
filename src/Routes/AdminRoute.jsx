import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import useAdmin from "../Hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isLoading] = useAdmin();
    let location = useLocation();
    if (loading || isLoading) {

        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user && isAdmin)
        return children;
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;