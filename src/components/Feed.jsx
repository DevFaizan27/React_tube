//react imports
import React, { useEffect, useState } from 'react'
//material ui component
import {Box ,Stack,Typography} from "@mui/material"
//react router dom imports
import { useNavigate } from 'react-router-dom'
//importing som contant from constant folder

//importing components
import SideBar from './SideBar';
import Videos from './Videos';

//importing API
import { fetchFromApi } from '../utils/fetchFromApi';


const Feed = () => {
  const[selectedCategory,setSelectedCategory]=useState('New')
  const[vedio,setVedio]=useState([])

  useEffect(()=>{
  fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVedio(data.items)
    )
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sx:'column',md:"row"}}}>
      <Box sx={{height:{sx:'auto',md:'92vh' },borderRight:'1px solid #3d3d3d' ,px:{sx:0,md:2}}}>
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Typography className='copyRight' variant='body2' sx={{mt:1.5 ,color:"#fff"}}>
        Copyright 2023 Faizan Husain
      </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
      <Typography variant='h4' fontWeight="bold" sx={{color:'white'}}>
        {selectedCategory}<span style={{color:'#f31503'}}>videos</span>
      </Typography>
      <Videos videos={vedio}/>
      </Box>
     
    </Stack>
  )
}

export default Feed