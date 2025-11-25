import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase.config';
import AuthContext from '../Context/AuthContext';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return () => unsubscribe()
    }, [])
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    const authData = {
        user,
        setUser,
        createUser,
        signInUser,
        logout
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;