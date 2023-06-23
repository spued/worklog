import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import AuthContext from "../contextes/AuthContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
    }, []);
  
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
  };