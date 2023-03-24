import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
     <Box sx={{ marginTop: { lg: '85px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="40px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '30px', xs: '0px' },display:'flex',justifyContent:'flex-start' }}  flexWrap="wrap" alignItems="center">
        {/*Make sure that actually exists (?) */}
        {exerciseVideos?.slice(0,7).map((item,index)=>(
        <a key={index} className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
            rel="noreferrer">
                <img style={{ borderTopLeftRadius: '20px' }} className='videos-card' src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>

                  <Typography sx={{ fontSize: { lg: '18px', xs: '16px' } }} fontWeight={600} color="#000" className='text-title'>
                  {item.video.title}
                  </Typography>
                  <Typography fontSize="14px" color="#000" className='video-channelName'>
                  {item.video.channelName}
                  </Typography>
              </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;