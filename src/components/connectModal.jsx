import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import Login from './Login';
import Signup from './Signup';

const ConnectModal = () => {
const [signup, setSignup]=useState(true)
const theme= useContext(ThemeContext)

    return (
        <div>
            <h1>Bienvenue</h1>
            <div className='buttonselectconnect'>
                <button 
                    style={{
                        background: signup ? theme.color4: theme.color2, 
                        color: 'white'}}
                    onClick={()=>setSignup(true)}>
                        Connexion
                </button>


                <button 
                    style={{
                        background:signup ? theme.color2 : theme.color4, 
                        color: 'white'}}
                    onClick={()=>setSignup(false)}>
                        Inscription
                </button>

            </div>



                <div className='connecModal' style={{background: theme.background1}}>
                    {signup ? <Login/> : <Signup/>}
                </div>
        </div>
    );
};

export default ConnectModal;