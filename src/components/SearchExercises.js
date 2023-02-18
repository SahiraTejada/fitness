import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Carousel from './Carousel';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={600} sx={{ fontSize: { lg: '40px', xs: '24px' } }} mb="12px" textAlign="center" fontFamily="Madani Arabic Medium">
        Welcome to our fitness community!
        </Typography>
        <Typography fontWeight={200} sx={{ fontSize: { lg: '20px', xs: '14px' } }} mb="55px" textAlign="center" fontFamily="Madani Arabic Regular" color="#404040">
        Get ready to sweat, stretch, and strengthen with us
        </Typography>

      <Box position="relative" mb="72px">
        <TextField height="76px" sx={{ input: { fontWeight: '700', border: 'none' }, 
            width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
            InputProps={{
              style: {
              borderRadius: '20px',
              backgroundColor: 'white',
              },
            }}
         />

          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' },   height: '56px', position: 'absolute', right: '0px', borderRadius:' 0px 20px 20px 0px', fontSize: { lg: '20px', xs: '14px' } }} borderRadius=' 15px 50px 30px' onClick={handleSearch}>
            Search
          </Button>
        </Box>
     
        <Box>
          <Carousel data={bodyParts} isBodyParts  setBodyPart={setBodyPart} bodyPart={bodyPart}/>
        </Box>
        
    </Stack>
  );
};

export default SearchExercises;