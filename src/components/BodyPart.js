import React from 'react'
import {Stack,Typography} from '@mui/material';
   
const BodyPart = ({item, setBodyPart, bodyPart,img}) => {

  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'

sx={{ backgroundColor: bodyPart === item ? '#FF2625':'#FFF',
        borderRadius: '16px',
        width: '130px',
        height:'44px',
        cursor:'pointer',
        gap:'47px'}}
        onClick={()=> {
            setBodyPart(item)
            //Scroll to the selected category
            window.scrollTo({top:1800,left:100,behavior:'smooth'})
        }}>
          
        {/*<img src={`${img}`} alt='dumbbell' style={{
            width:'40px',height : '40px'
        }}/>*/}
         <Typography fontSize="16px" fontFamily='Madani Arabic Semi Bold' color='#404040' textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart