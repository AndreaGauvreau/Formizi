import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetListingComplete } from '../ListingLesson/GetListing'


export default function SelectFormation() {
    const {id}=useParams()
    const [formation, setFormation]=useState([])

    const fetchFormations= ()=>{
        setFormation(<GetListingComplete/>) 
    }

    console.log(id)
  return (
    <GetListingComplete/>  )
}
