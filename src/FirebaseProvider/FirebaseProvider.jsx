import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import auth from "../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

    //gitHub login
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    //logout
    const logout = () =>{
        setUser(null)
        signOut(auth)
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
        githubLogIn,
        logout,
        user,
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