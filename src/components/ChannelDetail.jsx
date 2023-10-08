//react imports
import React,{useState,useEffect} from 'react'
//material ui component
import {Box ,Stack} from "@mui/material"

//react router dom imports

//importing som contant from constant folder

//importing components
import ChannelCard from './ChannelCard';
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromApi';
import Videos from './Videos';

const ChannelDetail = () => {
  const[channelDetail,setChannelDetail]=useState(null)
  const[vedios,setVedio]=useState([])

  const {id}=useParams()

  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVedio(data?.items))
  },[id])

  return (
    
    <Box minHeight='95vh' >
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,134,1) 100%, rgba(0,212,255,1) 100%)', zIndex:10, height:'150px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>

      <Box display='flex' p={2}>
      <Box sx={{mr:{sm:'100px'}}}>
           <Videos videos={vedios} key={id}/>
      </Box>
      </Box>

    </Box>
  )
}

export default ChannelDetail