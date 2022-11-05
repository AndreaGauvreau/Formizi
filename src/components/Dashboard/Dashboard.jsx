import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const Dashboard = () => {
    const theme= useContext(ThemeContext)
    return (
        <div>
            <h2 style={{color: theme.color1}}>dashbaord</h2>
        </div>
    );
};

export default Dashboard;