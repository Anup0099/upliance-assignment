import { current } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";




const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const ubsubscibe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            ubsubscibe();
        }
    }, [])
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
};
export const useAuth = () => useContext(AuthContext);