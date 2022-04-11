import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import app from '../../Firebase.init';
// import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Login.css';

const auth = getAuth(app);
const Login = () => {
    // const {googleSignin} = useFirebase();
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    return (
        <div>
            <h2>Login</h2>
            <div className="mx-auto w-50">
                <Form className='w-50 mx-auto text-align-center'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            
                        </Form.Text>
                    </Form.Group>
                    <br />

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Save Password" />
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
            <button onClick={ () => signInWithGoogle(user)}>Google Signin</button>
        </div>
    );
};

export default Login;