import React,{useContext} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import Icon from '../assets/icons/gym.png';
import Back from '../assets/icons/back.png';
import JJ from '../assets/icons/gym.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
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
const HorizonScrollbar = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
        <Box
        key={item.id || item.name }
        itemID={item.id || item.name }
        title={item.id || item.name }
        m="0 10px">
            { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercises={item}/>}
        </Box>      
        )
        )}
    </ScrollMenu>
    

  )
}

export default HorizonScrollbar