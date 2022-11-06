import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import LittleMenu from './LittleMenu/LittleMenu';
import ReprendreBouton from './ReprendreBouton/ReprendreBouton';
import './DashBoard.css'
import ProfilMenu from './ProfilMenus/ProfilMenu';
import ListingSection from './ListingLesson/ListingSection';

const Dashboard = ({darkMode, setDarkMode}) => {
    const theme= useContext(ThemeContext)
    return (<div className='Dashboard'>
        <div className='dashboardheader'>
            <LittleMenu setDarkMode={setDarkMode} darkMode={darkMode}/>
            <ReprendreBouton/>
            <ProfilMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
        <div>
            <ListingSection/>
        </div>
        </div>
    );
};

export default Dashboard;