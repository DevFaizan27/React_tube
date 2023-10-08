//react imports
import React, { useState,ueEffect, useEffect } from 'react'
import ReactPlayer from 'react-player';
//material ui component
import {Typography,Box,Stack} from "@mui/material"
import { CheckCircle } from '@mui/icons-material';

//react router dom imports
import { Link, useNavigate,useParams } from 'react-router-dom'
//importing som contant from constant folder

//importing components
import Videos from './Videos';

//importing API
import { fetchFromApi } from '../utils/fetchFromApi';

const VideoDetail = () => {
const {id}=useParams()
const[vedioDetal,setVedioDetail]=useState(null)
const[vedios,setVedios]=useState([])

console.log(id)
useEffect(()=>{
  fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
  .then((data)=>setVedioDetail(data.items[0]))
  fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  .then((data)=>setVedios(data.items))
},[id])

if(!vedioDetal?.snippet) return 'Loading...'
  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column' , md:'row'}}>
        <Box flex={1}>
    <Box sx={{width:"100%", position:'sticky', top:'100px'}}>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls/>
    <Typography color='#fff' variant='h5' fontWeight='bold'  p={2}>
      {vedioDetal.snippet.title}
    </Typography>
    <Stack direction='row' justifyContent='space-between' sx={{color:'#fff' }} py={2} px={2}>
      <Link to={`/channel/${vedioDetal.snippet.channelId}}`}>
        <Typography variant={{sm:'subtitle1' ,md:'h6'}} color='#fff'>
          {vedioDetal.snippet.channelTitle}
          <CheckCircle sx={{fontSize:'12px', color:'gray', ml:'5px'}}/>
        </Typography>
      </Link>
      <Stack direction='row' gap='20px' alignItems='center'>
      <Typography variant='body1' sx={{opacity:0.7}}>
          {parseInt(vedioDetal.statistics.viewCount).toLocaleString()} Views
      </Typography>
      <Typography variant='body1' sx={{opacity:0.7}}>
          {parseInt(vedioDetal.statistics.likeCount).toLocaleString()} Likes
      </Typography>
    </Stack>
    </Stack>
    </Box>
        </Box>
        <Box px={2} py={{md:1 ,xs:5}} justifyContent='center' alignItems='center'> 
    <Videos videos={vedios} direction="column"/>
      </Box>
      </Stack>
  
    </Box>
  )
}

export default VideoDetail