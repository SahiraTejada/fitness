import React from 'react';
import {Box, Stack,Typography,Button} from '@mui/material';
import HeroBannerImg from '../assets/images/146-1463629_exercise-fitness-gym-png-transparent-png-removebg-preview.png';
import Pesas from '../assets/images/3548031_01-removebg-preview.png';
import Man from '../assets/images/man-gadae9296d_1920.jpg';
const HeroBanner = () => {
  return (
   
    <Box >
    <div className= "cover" >
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{ lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
           Check out the most effective exercises
        </Typography>
        <Button variant='contained'href='exercises' style={{backgroundColor: "#FF2625"}} sx={{padding:'10px'}}>
            Explore Exercises
        </Button>
      {/*<div class="line"></div>
        <div class="block hero-banner-img">
          <div class="subscribe" id="red-rectangle"></div>
          <div class="subscribe" id="black-rectangle"></div>
          </div>*/}
    </div>
    </Box>
    /*<Box sx={{mt: {lg: '12px',xs:'70px' },
    ml: {sm: '50px'}}} position="relative" p="20px" mb="190px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>
        <Typography fontWeight={700} sx={{fontSize:{ lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
           Check out the most effective exercises
        </Typography>
        <Button variant='contained'href='exercises' style={{backgroundColor: "#FF2625"}} sx={{padding:'10px'}}>
            Explore Exercises
        </Button>
      {/*<div class="line"></div>
        <div class="block hero-banner-img">
          <div class="subscribe" id="red-rectangle"></div>
          <div class="subscribe" id="black-rectangle"></div>
          </div>
   
     <img src={Pesas} alt='hero-banner' className='hero-banner-img2'/>
    </Box> */
    
  )
}

export default HeroBanner