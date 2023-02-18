import React from 'react';
import {Box, Typography} from '@mui/material';


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
            <button className='hero-btn'>
              <div >
                <span>
                  <p>Explore Exercises</p>
                </span>
              </div>
              <div>
                <span>
                  <p>With Fitness Body</p>
                </span>
              </div>
            </button>
          </div>
        </Box>
      </div>
    </Box>  
  )
}

export default HeroBanner