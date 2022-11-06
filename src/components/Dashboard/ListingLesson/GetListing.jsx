import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { lessonData } from './listingData';
import './GetListing.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const starting = (e) => e.Progression === 0
export const progress = (e) => e.Progression > 0 && e.Progression < 100
export const complete = (e) => e.Progression === 100


function StyleListing(){
    let theme=useContext(ThemeContext);


    return ({color: theme.color3, 
    background: theme.color6,
    boxShadow: theme.shadow2,
    position: 'relative'})}

export const GetListingComplete = () => {
    const theme=useContext(ThemeContext)
    const hoverChange=()=>{
        
    }
    return (
        <div className='listing'>
           {lessonData.filter(complete).map(e=><><span onHover={hoverChange} style={StyleListing({theme})}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={30} styles={{
                path: {stroke:theme.color1, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color4}}} /></div></span></>
            )} 
        </div>
    );
};


export const GetListingProgress = () => {
    const theme=useContext(ThemeContext)

    return (
        <div className='listing'>
           {lessonData.filter(progress).map(e=><><span style={StyleListing({theme})}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={30} styles={{
                path: {stroke:theme.color7, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color3}}} /></div></span></>
            )} 
        </div>
    );
};


export const GetListingStart = () => {
    const theme=useContext(ThemeContext)
    return (
        <div className='listing'>
           {lessonData.filter(starting).map(e=><><span style={StyleListing({theme})}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={30} styles={{
                path: {stroke:theme.color3, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color3}}} /></div></span></>
            )} 
        </div>
    );
};

