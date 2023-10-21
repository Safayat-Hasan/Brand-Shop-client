import { useContext } from "react";
import { AuthContext } from "../main_components/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouteCart = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    console.log(location.pathname);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children;
    }

    // state={location.pathname}
    
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRouteCart;