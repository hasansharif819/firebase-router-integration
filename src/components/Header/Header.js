import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../Firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Header.css';

const auth = getAuth(app);
const Header = () => {
    // const {user, handleSignOut} = useFirebase();
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/order'>Order</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/register'>Register</Link>
            <span> {user?.displayName && user.displayName}  </span>
            <span className='image-site'> 
                {user? <img width={30} height={30} src={user?.photoURL && user.photoURL} alt="" /> : ''} 
            </span>
            {user?.uid ? 
            <button onClick={ () => signOut(auth)}>Sign out</button> 
            :
            <Link to='/login'>Login</Link>}

        </div>
    );
};

export default Header;