import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true);
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth, currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signInUser, logOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;