import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import './ReprendreBouton.css'

const ReprendreBouton = () => {
    const theme= useContext(ThemeContext)

    return (
        <div>
         <div className='littlemenu' 
        style={{boxShadow: theme.shadow1, background:theme.background3}}>
                <span style={{color: theme.color3}}>Reprendre</span>
        </div>



        </div>
    );
};

export default ReprendreBouton;