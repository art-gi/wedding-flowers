import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import authService from "../../services/authService.js";
import {AuthContext} from '../../context/AuthContext.js'

function Logout() {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                logout();
                navigate('/');
            })
    }, [])

    return null;
}
export default Logout;