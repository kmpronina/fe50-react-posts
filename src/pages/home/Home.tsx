import React, { useEffect } from 'react';
import Header from '#containers/header';
import ListOfPosts from '#containers/listOfPosts';
import ListOfUsers from '#containers/listOfUsers';
import { Box } from '@mui/material';
// import { getPostsSaga } from '#store/saga/postsSaga';
// import { useAppDispatch } from '#store/store';

const Home = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getPostsSaga());
  // }, []);

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
