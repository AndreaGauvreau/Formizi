import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import './ProfilMenu.css'
import LogoBlanc from '../../../images/Formizi-Logo-Blanc.png'
import LogoNoir from '../../../images/Formizi-Logo-Noir.png'

const ProfilMenu = ({darkMode, setDarkMode}) => {
    const theme= useContext(ThemeContext)

    return (
        <div>
         <div className='littlemenu2' 
        style={{boxShadow: theme.shadow1, background:theme.color1}}>
            <img src={darkMode ? LogoBlanc : LogoNoir} style={{width: '80px'}}/>
                <img style={{width: '35px', borderRadius:'50%'}} src='https://thispersondoesnotexist.com/image'/>
 </div>
        </div>
    );
};

export default ProfilMenu;