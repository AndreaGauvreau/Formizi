import React, { useContext, useReducer } from 'react';
import { ThemeContext } from '../../../App';
import GetListing, { complete, GetListingComplete, GetListingProgress, GetListingStart, progress, starting } from './GetListing';
import { lessonData } from './listingData';
import './ListingSection.css'

const ListingSection = () => {
    const theme= useContext(ThemeContext)
    return (
        <div className='Section'>
            <div className='overlay_Section'>
            <span id='noncommence' style={{color:theme.color3}}>Non commencé</span>

            <div className='Section_Demarrer'
            style={{backgroundColor:theme.color1, boxShadow:theme.shadow1}}>
                <span style={{color: theme.color3, marginTop: '10px', fontWeight:'900'}}>{lessonData.filter(starting).length}/{lessonData.length}</span>
                <GetListingStart/>
                </div>
                </div>
            <div className='overlay_Section'>
            <span id='encours'>En cours...</span>

            <div className='Section_Progression'
                style={{ background:theme.background3, boxShadow:theme.shadow1}}>
                <span style={{color: theme.color3, marginTop: '10px', fontWeight:'900'}}>{lessonData.filter(progress).length}/{lessonData.length}</span>
            <GetListingProgress/>

            </div>
            </div>
            <div className='overlay_Section'>
            <span id='termine'>Terminé</span>

            <div className='Section_Complete'
                        style={{ background:theme.background4, boxShadow:theme.shadow1}}>
                        <span style={{color: theme.color3, marginTop: '10px', fontWeight:'900'}}>{lessonData.filter(complete).length}/{lessonData.length}</span>
            <GetListingComplete/>
            </div>
            </div>
        </div>
    );
};

export default ListingSection;