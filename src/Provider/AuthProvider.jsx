import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.config';
import AuthContext from '../Context/AuthContext';
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authData = {
        user,
        setUser,
        createUser,
        signInUser
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;