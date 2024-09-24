//inspired from https://medium.com/@yogeshmulecraft/implementing-protected-routes-in-react-js-b39583be0740
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./ProtectedRoute";

const PrivateRoutes = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };
  export default PrivateRoutes;