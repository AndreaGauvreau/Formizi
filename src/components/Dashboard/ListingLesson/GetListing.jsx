import React, { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { lessonData } from './listingData';
import './GetListing.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const starting = (e) => e.Progression === 0
export const progress = (e) => e.Progression > 0 && e.Progression < 100
export const complete = (e) => e.Progression === 100


export const GetListingComplete = () => {
    const theme=useContext(ThemeContext)

    
    return (
        <div className='listing'>
           {lessonData.filter(complete).map(e=><><span style={{
            color: theme.color3, 
            background:theme.color6,
            boxShadow:theme.shadow2,
            position:'relative'}}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={50} styles={{
                path: {stroke:theme.color3, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color1}}} /></div></span></>
            )} 
        </div>
    );
};


export const GetListingProgress = () => {
    const theme=useContext(ThemeContext)
    return (
        <div className='listing'>
           {lessonData.filter(progress).map(e=><><span style={{
            color: theme.color3, 
            background:theme.color6,
            boxShadow:theme.shadow2,
            position:'relative'}}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={50} styles={{
                path: {stroke:theme.color3, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color1}}} /></div></span></>
            )} 
        </div>
    );
};


export const GetListingStart = () => {
    const theme=useContext(ThemeContext)

    
    return (
        <div className='listing'>
           {lessonData.filter(starting).map(e=><><span style={{
            color: theme.color3, 
            background:theme.color6,
            boxShadow:theme.shadow2,
            position:'relative'}}>{e.name}
            <div className='circleProgress'>
            <CircularProgressbar value={e.Progression} strokeWidth={50} styles={{
                path: {stroke:theme.color3, strokeLinecap: 'butt'}, 
                trail: {stroke: theme.color1}}} /></div></span></>
            )} 
        </div>
    );
};

