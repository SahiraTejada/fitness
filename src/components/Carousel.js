import React from 'react';
import {Box} from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({data,bodyPart,setBodyPart,isBodyParts})  => {
  const Left=()=>{
    var carousel = document.getElementById('carousel');
    carousel.scrollLeft = carousel.scrollLeft -500;
  }

  const Right=()=>{
    var carousel = document.getElementById('carousel');
    carousel.scrollLeft = carousel.scrollLeft + 500;
  }
  return (
    <div class="carousel-container">
      <ArrowBackIosIcon onClick={Left}  className='arrows'  style={{marginRight:'5px'}}/>
      <div id="carousel" className='carousel-items'>
        {data.map((item)=>(
          <Box
            key={item.id || item.name }
            itemID={item.id || item.name }
            title={item.id || item.name }
            m="0 10px">
              { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercises={item}/>}
          </Box>
        ))}
      </div>
      <ArrowForwardIosIcon onClick={Right}  className='arrows' style={{marginLeft:'5px'}} />
    </div>
  )
}

export default Carousel