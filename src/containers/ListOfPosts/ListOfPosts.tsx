import React from 'react';
import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import Post from '#components/post';
import { ListOfPostsStyled } from './ListOfPostsStyled';

const ListOfPosts: React.FC = () => {
  return (
    <ListOfPostsStyled>
      {postsCardsMockArray.map((arrowItem) => {
        <Post post={arrowItem} key={arrowItem.id} />;
      })}
    </ListOfPostsStyled>
  );
};

export default ListOfPosts;
