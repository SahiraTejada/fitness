import React,{useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner
from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
const Home = () => {

  //Changes in these states are gonna be reflected in all our a application
    const [bodyPart,setBodyPart] = useState('all');
    const [exercises,setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home