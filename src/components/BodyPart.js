import React from 'react'
import {Stack,Typography} from '@mui/material';
import Icon from '../assets/icons/gym.png';
import Back from '../assets/icons/back.png';
import JJ from '../assets/icons/gym.png';
    const ImagesIcon =()=>{
 
  const images = [
  { id: 0, src: `${Back}` },
  { id: 1, src: `${JJ}`  },
  { id: 2, src: `${Icon}`  },
]
return (
    <div>
         {images.map(image => (
        <img key={image.id} src={image.src} alt="mage" style={{
            width:'40px',height : '40px'}}/>
      ))}
    </div>
  )
  
}
const BodyPart = ({item, setBodyPart, bodyPart,img}) => {

  return (
    <Stack

    type="button"
    alignItems="center"
    justifyContent="center"
    className='bodyPart-card'

sx={{ backgroundColor: bodyPart === item ? '#FF2625':'#FFF',
        borderRadius: '8px',
        width: '130px',
        height:'50px',
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