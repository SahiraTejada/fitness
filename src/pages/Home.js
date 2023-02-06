import React,{useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner
from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import Back from '../assets/icons/back.png';
import JJ from '../assets/about01.png';
const Home = () => {
 
  //Changes in these states are gonna be reflected in all our a application
    const [bodyPart,setBodyPart] = useState('all');
    const [exercises,setExercises] = useState([]); 
    console.log(bodyPart);
    const ImagesIcon =()=>{
 
  const images = [
  { id: 0, src: `${Back}` },
  { id: 1, src: `${JJ}`  },
  { id: 2, src: `${Back}`  },
]
return (
    <div>
         {images.map(image => (
        <img key={image.id} src={image.src} alt="mage" />
      ))}
    </div>
  )
  
}
  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home