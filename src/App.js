import { useContext, useState } from 'react';
import './App.css';
import ConnectModal from './components/connectModal';
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "./utils/firebase.config"
import Dashboard from './components/Dashboard/Dashboard';
import { createContext } from 'react';
import { useEffect } from 'react';
import Switch from './components/Switch';

const themes={
  dark: {
    background1: 'linear-gradient(230deg, #2A3052 0%, #07080D 100%)',
    background2: 'linear-gradient(230deg, #f2f2f2 0%, #ffffff 100%)',
    background3: 'linear-gradient(222deg, rgba(235,23,23,1) 0%, rgba(255,130,130,1) 100%)',
    background4: 'linear-gradient(184deg, rgba(57,143,252,1) 0%, rgba(14,56,108,1) 100%)',
    shadow1: '0px 0px 01px 10px #313654,0px 0px 0px 11px #ffffff60',
    shadow2: '0px 0px 0px 8px #ffffff10',
    color1: '#07080D', 
    color2: '#2A3052',
    color3: '#ffffff', 
    color4: '#398ffc',
    color5: '#B2FF3E',
    color6: '#ffffff20'
  },
  light: {
    background1: 'linear-gradient(230deg, #f2f2f2 0%, #ffffff 100%)',
    background2: 'linear-gradient(230deg, #2A3052 0%, #07080D 100%)',
    background3: 'linear-gradient(222deg, rgba(235,23,23,1) 0%, rgba(255,130,130,1) 100%)',
    background4: 'linear-gradient(184deg, rgba(57,143,252,1) 0%, rgba(14,56,108,1) 100%)',
    shadow1: '0px 0px 1px 10px rgb(235 235 235),  0px 0px 0px 11px rgb(112 112 112 / 38%)',
    shadow2: '0px 0px 0px 8px #00000010',
    color1: '#ffffff', 
    color2: '#2A3052',
    color3: '#07080D', 
    color4: '#398ffc',
    color5: '#B2FF3E',
    color6: '#00000020'

  }}

export const ThemeContext = createContext(themes.light)



function App() {

{/*  const [user, setUser]= useState(null)
    onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
    })
    const handleLogout= async ()=>{
      await signOut(auth)
    }*/}

  const [darkMode, setDarkMode]= useState(true)
  const theme= darkMode ? themes.dark : themes.light

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{background: theme.background1}}>
          <Dashboard setDarkMode={setDarkMode} darkMode={darkMode}/>
{/*          <span>{user?.displayName}</span>
          {user ?  : <ConnectModal/>}

        <button onClick={handleLogout}>déconnexion</button>*/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
