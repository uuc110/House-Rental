import React, { useState, createContext, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();

// Create Auth Provider
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null
    );

    const updateUser = (data) => {
        setUser(data);
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};