import React, { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import './Switch.css';

const Switch = ({setDarkMode, darkMode}) => {
    const theme = useContext(ThemeContext)
        const handleModeChange=(e)=>{
            setDarkMode(e.target.checked)
            console.log(e.target.checked)
        }


  return (
    <>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        onChange={handleModeChange}
        checked={darkMode}
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
        style={{background: theme.color5}}
      >
        <span className={`react-switch-button`} 
        style={{background: theme.color1}}/>
      </label>
    </>
  );
};

export default Switch;