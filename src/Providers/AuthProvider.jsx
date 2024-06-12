import { GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const upadteUserProfile = (userName, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: photoUrl
        })

    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }

    }, [auth])
    const authInfo = {
        user, loading, createUser, signInUser, logOutUser, upadteUserProfile, googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;