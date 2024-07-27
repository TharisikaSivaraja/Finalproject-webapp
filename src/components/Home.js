import { Box, Stack } from '@mui/material';
import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightbar from './Rightbar';

const Home = ({ setMode, mode }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode} />
        <Feed />
        <Rightbar />
      </Stack>
     
    </Box>
  );
}

export default Home;
