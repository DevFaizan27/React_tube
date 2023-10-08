//react imports
import React, { useState } from 'react'
//material ui component
import {Box ,Stack,Typography ,Card , CardContent,CardMedia} from "@mui/material"
import {CheckCircle} from '@mui/icons-material';

//react router dom imports
import { Link } from 'react-router-dom';

//importing som contant from constant folder
import { demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoProfilePicture,demoVideoTitle,demoVideoUrl } from '../utils/contstant';

//importing components


const VideoCard = ({video:{id:{videoId},snippet}}) => {
  return (
    <Card sx={{ width:{xs:'100%',sm:'358px',md:'330px' },  boxShadow:'none', borderRadius:'0'}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}> 
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:{sx:'100%' ,sm:'358px'},height:180}}/>

            <CardContent sx={{backgroundColor:'#1e1e1e', height:'160px' }}>

            <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color='#fff'>
                        {snippet?.title.slice(0,60)||demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>

                <Link to={snippet?.channelId?`/channel/${snippet.channelId}`:demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color='gray'>
                        {snippet?.channelTitle.slice(0,60)||demoChannelTitle.slice(0,60)}
                        <CheckCircle sx={{fontSize:12,color:'gray', ml:'5px'}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard