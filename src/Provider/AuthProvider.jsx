import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.config';
import AuthContext from '../Context/AuthContext';
const AuthProvider = ({children}) => {
    // const [user, setUser] = useState(null)
    const user = 'jim'
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user,
        // setUser,
        createUser
    }
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    )
};

export default AuthProvider;