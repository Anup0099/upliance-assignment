import { current } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, signInWithGoogle, signOut } from "./firebase";
import { ressetUserData } from "./redux/userSlice";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const ubsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      ubsubscibe();
    };
  }, []);
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      
    } catch (error) {
      console.error("Logout error", error);
    }
  };
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
