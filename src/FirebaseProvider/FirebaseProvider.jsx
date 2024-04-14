import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

//social auth provider
const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user);

    //create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    //observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const allValues = {
        createUser,
        signInUser,
        googleLogIn,
    }

    return (
        <AuthContext.Provider value={allValues}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;