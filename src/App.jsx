import React from 'react'
//importing router dependencies
import { BrowserRouter,Routes,Route } from 'react-router-dom'
//material ui dependencies
import {Box} from '@mui/material'
//importing components
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SerchFeed from './components/SerchFeed'
import Navbar from './components/Navbar'
import Feed from './components/Feed'



const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
       <Navbar/>
       <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' exact element={<VideoDetail/>}/>
        <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' exact element={<SerchFeed/>}/>
       </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App