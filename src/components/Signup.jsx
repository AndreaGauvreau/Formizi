import React, { useRef } from 'react';
import { useState } from 'react';
import { auth } from '../utils/firebase.config';

const Signup = () => {
    const registerEmail=useRef()
    const registerPassword=useRef()
    const [displayName, setDisplayName] =useState("")
    const handleRegister=(e)=>{
        e.preventDefault()

        try{
            auth.createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value)
                .then(async(userAuth)=>{
                    await userAuth.user.updateProfile({
                        displayName
                    })
                    window.location.reload()
                })
            
        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <div>
            <h2>Inscription</h2>
                <form onSubmit={handleRegister} className='form'>
                    <input type="text" placeholder='pseudo' required onChange={(e)=>setDisplayName(e.target.value)}/>
                    <input type="email" placeholder='mail' required ref={registerEmail}/>
                    <input type="password" placeholder='mot de passe' required ref={registerPassword}/>
                    <input type="submit" value="s'inscrire"/>
                </form>
        </div>
    );
};

export default Signup;