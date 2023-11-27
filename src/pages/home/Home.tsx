import React from 'react';
import Header from '#containers/header';
import ListOfPosts from '#containers/listOfPosts';
import ListOfUsers from '#containers/listOfUsers';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <div>
      <Header />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <ListOfUsers />
        <ListOfPosts />
      </Box>
    </div>
  );
};
export default Home;
