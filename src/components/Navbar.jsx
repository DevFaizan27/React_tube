//react imports
import React from 'react'
//material ui component
import {Stack} from '@mui/material'
//react router dom imports
import { Link } from 'react-router-dom'
//importing som contant from constant folder
import { logo } from '../utils/contstant'
//importing components
import SerchBar from './SerchBar'

const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky', background:'#000' ,top:0 ,justifyContent:'space-between'}}>
        <Link to="/" style={{display:'flex', alignItems:'center' }}><img src={logo} alt='logo' height={45}/></Link>
        <SerchBar/>
    </Stack>
  )
}

export default Navbar