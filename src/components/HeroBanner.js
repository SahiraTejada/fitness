import React from 'react';
import {Box, Stack,Typography,Button} from '@mui/material';
import HeroBannerImg from '../assets/images/146-1463629_exercise-fitness-gym-png-transparent-png-removebg-preview.png';
import Pesas from '../assets/images/3548031_01-removebg-preview.png';
import Man from '../assets/images/man-gadae9296d_1920.jpg';
const HeroBanner = () => {
  return (
   
    <Box display="flex">
    <div className= "cover"  style={{justifyContent:'space-between',display:'flex'}}>
      <Box mb={15} padding={4}>
        <Typography fontWeight={700} fontFamily="Madani Arabic Extra Bold" sx={{fontSize:{ lg: '44px', xs: '40px'}}}  mb={3} mt="0px"  color='#FFF'>
            Sweat, stretch, &  <br/>strengthen with us 
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" color='#FFF' mb={7}>
           Check out the most effective exercises
        </Typography>
        <div>
       <button alt="Explore Exercises" className='btn6'>
  <i>E</i>
  <i>x</i>
  <i>p</i>
  <i>l</i>
  <i>o</i>
  <i>r</i>
  <i>e</i>
  <i>&nbsp;</i>
  <i>E</i>
  <i>x</i>
  <i>e</i>
  <i>r</i>
  <i>c</i>
  <i>i</i>
  <i>s</i>
  <i>e</i>
  <i>s</i>
</button></div>
       </Box>
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