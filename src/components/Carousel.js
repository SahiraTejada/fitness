import React,{useContext} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({data,bodyPart,setBodyPart,isBodyParts})  => {
  const slideLeft=()=>{
    var caro = document.getElementById('caro');
    caro.scrollLeft = caro.scrollLeft -500;
  }

  const slideRight=()=>{
    var caro = document.getElementById('caro');
    caro.scrollLeft = caro.scrollLeft + 500;
  }
  return (
 
<div class="caro-div">
   <div className='carousel_btn'>
  <ArrowBackIosIcon onClick={slideLeft}  className='slide-btn'  style={{marginRight:'5px'}}/>
  </div>
  <div id="caro" className='caro-items'>
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
      <div>
      <ArrowForwardIosIcon onClick={slideRight}  className='slide-btn' style={{marginLeft:'5px'}} />
      </div>
</div>
  )
}

export default Carousel