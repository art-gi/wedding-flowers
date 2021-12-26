import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from './../../context/AuthContext.js';

function Guard() {
    const { isAuthentificated } = useContext(AuthContext);
    
    return (
       isAuthentificated
       ? <Outlet />
       : < Navigate to = "/login" />
    )

}
export default Guard;