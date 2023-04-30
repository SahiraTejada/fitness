import React from 'react'
import {Link} from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/icons/logo.png';
const Navbar = () => {
  return (
    <Stack
        direction="row"
        justifyContent='start'
        height={60}
        display="flex"
        alignItems="center"
        style={{textDecoration:'none',color:'#FF5050'}}>
        <Link to="/" style={{
          textDecoration:'none',
          color:'#FF2625',
          fontSize:'25px',
          fontFamily:'Madani Arabic Extra Bold',
          paddingLeft:'20px',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'}}
          >
          <img src={logo} alt='Logo' style={{width:'30px',height:'30px',marginRight:'10px'}}/>
            <p>Fitness Body</p>
        </Link>
    </Stack>
  )
}

export default Navbar