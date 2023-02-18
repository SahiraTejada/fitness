import React from 'react'
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
const Navbar = () => {
  return (
    <Stack
        direction="row"
        justifyContent='space-between'
        height={65}
        display="flex"
        alignItems="center"
        style={{textDecoration:'none',color:'#3A1212'}}>
        <Link to="/" style={{textDecoration:'none',color:'#FF2625',fontSize:'30px',fontFamily:'Madani Arabic Extra Bold',paddingLeft:'20px'}}>
            Fitness Body
        </Link>
    </Stack>
  )
}

export default Navbar