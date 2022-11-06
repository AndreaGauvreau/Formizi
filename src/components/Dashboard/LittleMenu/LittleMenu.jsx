import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import Switch from '../../Switch';
import './LittleMenu.css'

const LittleMenu = ({darkMode, setDarkMode}) => {
    const theme= useContext(ThemeContext)

    return (
        <div className='littlemenu' 
        style={{boxShadow: theme.shadow1, background:theme.color1}}>
            <i style={{color: theme.color3, padding: '10px', background:theme.color6, borderRadius: '10px'}} class="fa-solid fa-house"></i>
            <i style={{color: theme.color3, padding: '10px', background:theme.color6, borderRadius: '10px'}} class="fa-solid fa-circle-info"></i>
            <Switch setDarkMode={setDarkMode} darkMode={darkMode}/>
        </div>
    );
};

export default LittleMenu;