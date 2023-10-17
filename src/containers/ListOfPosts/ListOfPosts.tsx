import React from 'react';
import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import Post from '#components/post';
// import { ListOfPostsStyled } from './ListOfPostsStyled';
import styled from 'styled-components';

const ListOfPosts: React.FC = () => {
  return (
    <ListOfPostsStyled>
      <Post post={postsCardsMockArray[0]} />
      <Post post={postsCardsMockArray[1]} />
      <Post post={postsCardsMockArray[2]} />
      <Post post={postsCardsMockArray[3]} />
      <Post post={postsCardsMockArray[4]} />

      {/* {postsCardsMockArray.map((arrowItem) => {
        <Post post={arrowItem} key={arrowItem.id} />;
      })} */}
    </ListOfPostsStyled>
  );
};

export default ListOfPosts;

const ListOfPostsStyled = styled.div<{ children: any }>`
height: 700px
background-color: blue`;
