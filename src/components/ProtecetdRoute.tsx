
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { FCC } from "../@types/types";

const ProtectedRoute: FCC = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);


    if (!isLoggedIn) {
        return <Navigate to={"/login"} replace />;
    }



    return <>{children}</>;
};

export default ProtectedRoute;