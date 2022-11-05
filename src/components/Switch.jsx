import React, { useEffect } from 'react';
import './Switch.css';

const Switch = ({setDarkMode, darkMode}) => {
    
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
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;