import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import './ProfilMenu.css'

const ProfilMenu = () => {
    const theme= useContext(ThemeContext)

    return (
        <div>
         <div className='littlemenu2' 
        style={{boxShadow: theme.shadow1, background:theme.color1}}>
                <span style={{color: theme.color3}}>Andréa</span>
                <img style={{width: '35px', borderRadius:'50%'}} src='https://thispersondoesnotexist.com/image'/>
 </div>
        </div>
    );
};

export default ProfilMenu;