//react imports
import React from 'react'

//material ui component
import {Stack} from "@mui/material"
//react router dom imports

//importing som contant from constant folder
import { categories } from '../utils/contstant'
//importing components



const SideBar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack direction="row" sx={{overflowY:"auto", height:{sx:'auto',md:'95%'} ,flexDirection:{md:'column'},}}>
        {categories.map((e)=>(
            <button className='category-btn' onClick={()=>{setSelectedCategory(e.name)}} style={{background:e.name===selectedCategory&&'#FC1503' ,color:'white'}} key={e.name}>
                <span style={{color:e.name===selectedCategory?'white':'red',marginRight:'15px'}}>{e.icon}</span>
                <span>{e.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar