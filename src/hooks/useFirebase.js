import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase.init";

const auth = getAuth();
const googleProvider = new GoogleAuthProvider(app);
const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleSignin = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then( () => { })
    }
    useEffect( () => {
        onAuthStateChanged(auth, user=>{
            setUser(user)
        })
    }, [])
    return {
        user,
        googleSignin,
        handleSignOut
    }
}

export default useFirebase;