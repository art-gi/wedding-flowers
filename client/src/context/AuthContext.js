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
     return setUser(initalState);
    };
    
    function isAuthentificated(user) {
        if (user.email) {
            return true;
        }
        return false;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthentificated }}>
            {children}
        </AuthContext.Provider>

    )

};


