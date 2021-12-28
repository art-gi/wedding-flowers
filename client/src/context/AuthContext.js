import { createContext } from 'react';
import { useState } from 'react';

export const AuthContext = createContext();

const initalState = {
    _id: '',
    name: '',
    email: '',
    accessToken: '',
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(initalState);
    const [productsId, setProductsId] = useState([]);

    function login(userData) {
        return setUser(userData);
    };

    function logout() {
        setProductsId([]);
        return setUser(initalState);
        
    };

    function isAuthentificated(user) {
        if (user.email) {
            return true;
        }
        return false;
    }
   

    function addId(itemId) {
        setProductsId((oldState) => [...oldState, itemId]);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthentificated, addId, productsId }}>
            {children}
        </AuthContext.Provider>

    )

};


