import React from 'react';
import { Box } from '@mui/material';

var date = new Date();

const Footer = () => (
  
  <Box mt="80px" bgcolor="#323437" width="100vh" height="80px" className="footer" >
    <div>
      <p>Workout</p>
      <p >Health</p>
    </div>
    <p className='creator'>{date.getFullYear()}  @Sahira Tejada </p>
  </Box>

);

export default Footer;