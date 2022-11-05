import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { ThemeContext } from '../App';
import { auth } from '../utils/firebase.config';
import './login.css'

const Login = () => {

    const theme=useContext(ThemeContext)

    const loginEmail=useRef()
    const loginPassword=useRef()
    const [error, setError]=useState(false)

    const handleLogin=async (e)=>{
        e.preventDefault()

        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail.current.value,
                loginPassword.current.value)

        }catch(error){
            console.log(error.message)
            setError(true)
        }
    }



    return (
        <div>
            <h2 style={{color:theme.color3}}>Connexion</h2>
            <form className='form' onSubmit={e => handleLogin(e)}>
                <input type='email' placeholder='email' ref={loginEmail}/>
                <input type='password' placeholder='password' ref={loginPassword}/>
                <input type='submit' value='connexion'/>
                <span>{error ? 'mail ou mot de passe incorrect' : ''}</span>
            </form>
        </div>
    );
};

export default Login;