import { useContext, useState } from 'react';
import './App.css';
import ConnectModal from './components/connectModal';
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "./utils/firebase.config"
import Dashboard from './components/Dashboard/Dashboard';
import { createContext } from 'react';
import Switch from './components/Switch';
import { useEffect } from 'react';

const themes={
  dark: {
    background1: 'linear-gradient(230deg, #2A3052 0%, #07080D 100%)',
    background2: 'linear-gradient(230deg, #f2f2f2 0%, #ffffff 100%)',
    color1: '#07080D', 
    color2: '#2A3052',
    color3: '#ffffff', 
    color4: '#398ffc',
    color5: '#B2FF3E',
  },
  light: {
    background1: 'linear-gradient(230deg, #f2f2f2 0%, #ffffff 100%)',
    background2: 'linear-gradient(230deg, #2A3052 0%, #07080D 100%)',
    color1: '#ffffff', 
    color2: '#2A3052',
    color3: '#07080D', 
    color4: '#398ffc',
    color5: '#B2FF3E',
  }}

export const ThemeContext = createContext(themes.light)


function App() {

  const [user, setUser]= useState(null)
    onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
    })
    const handleLogout= async ()=>{
      await signOut(auth)
    }
    
  const [darkMode, setDarkMode]= useState(true)
  const theme= darkMode ? themes.dark : themes.light


  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{background: theme.background1}}>
          <Switch setDarkMode={setDarkMode} darkMode={darkMode}/>
          <span>{user?.displayName}</span>
          {user ?  <Dashboard/>: <ConnectModal/>}

        <button onClick={handleLogout}>déconnexion</button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
