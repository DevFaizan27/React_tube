//react imports
import React, { useEffect, useState } from 'react'
//material ui component
import {Box ,Typography} from "@mui/material"
//react router dom imports
import { useNavigate,useParams } from 'react-router-dom'
//importing som contant from constant folder

//importing components
import Videos from './Videos';

//importing API
import { fetchFromApi } from '../utils/fetchFromApi';


const SearchFeed = () => {
  const[vedio,setVedio]=useState([])
  const {searchTerm}=useParams()

  useEffect(()=>{
  fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=>setVedio(data.items)
    )
  },[searchTerm])

  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    <Typography variant='h4' fontWeight="bold" sx={{color:'white'}}>
      {searchTerm}<span style={{color:'#f31503'}}>{searchTerm}</span>videos
    </Typography>
    <Videos videos={vedio} />
    </Box>

  )
}

export default SearchFeed