import { createContext, useState } from "react";
import { applyActionCode, createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(applyActionCode);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        user,
        loading,
        createUser,
    }


    return (
        <AuthContext.AuthProviders value={authInfo}>
            {children}
        </AuthContext.AuthProviders>
    );
};

export default AuthProviders;