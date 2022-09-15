import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const auth = getAuth();

    const [user, setUser] = useState(null);

    const signUp = async ({ email, password }) => {
        console.log(email, password)
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => { throw new Error(error) });
    }

    const signIn = async ({ email, password }) => {
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => { throw new Error(error) });
    }

    const logout = async () => {
        await signOut(auth)
            .then(() => {
                setUser(null);
            }).catch((error) => { throw new Error(error) });
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, []);

    return (
        <AuthContext.Provider
            value={{ signUp, signIn, logout, user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;