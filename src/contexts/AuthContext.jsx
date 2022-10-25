import { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth();

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const signUp = async ({ email, password }) => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate("/list-flow/tasks");
            })
            .catch((error) => { throw new Error(error) });
    }

    const signIn = async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate("/list-flow/tasks");
            })
            .catch((error) => { throw new Error(error) });
    }

    const googleSignIn = async () => {
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                setUser(result.user);
                navigate("/list-flow/tasks");
            })
            .catch((error) => { throw new Error(error) });
    }

    const logout = async () => {
        await signOut(auth)
            .then(() => {
                setUser(null);
                navigate("/list-flow");
            }).catch((error) => { throw new Error(error) });
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, []);

    return (
        <AuthContext.Provider
            value={{ signUp, signIn, googleSignIn, logout, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;