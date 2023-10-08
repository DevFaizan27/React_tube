//react imports
import React from 'react'
//material ui component
import {Box ,Stack} from "@mui/material"

//react router dom imports

//importing som contant from constant folder

//importing components
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';



const Videos = ({videos,direction}) => {
  return (
    <Stack direction={direction||'row'} flexWrap='wrap' justifyContent="start" gap={2} >
      {videos.map((item,id)=>(
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos