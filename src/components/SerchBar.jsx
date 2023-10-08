//react imports
import React, { useState } from 'react'
//material ui component
import {Paper,IconButton,} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
//react router dom imports
import { useNavigate } from 'react-router-dom'
//importing som contant from constant folder

//importing components




const SerchBar = () => {
  const[searchTerm,setSearchTerm]=useState("")
  
const navigate=useNavigate();

const handleSubmit=(e)=>{
  e.preventDefault()

  if(searchTerm){
    navigate(`/${searchTerm}`)
  }
  setSearchTerm('')
}
  return (
    <Paper component='form' onSubmit={handleSubmit} sx={{borderRadius:20 , border:'1px solis #e3e3e3' ,pl:2 ,boxShadow:'none', mr:{sm:5}}} >
        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <IconButton  type='submit' sx={{p:'10px',color:'red'}}>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SerchBar