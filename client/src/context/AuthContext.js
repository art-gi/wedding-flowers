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

    function login(userData) {
       return setUser(userData);
    };

    function logout() {
        setUser(initalState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>

    )

};


