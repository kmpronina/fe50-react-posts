import React from 'react';
import { useAppSelector } from '#store/store';
import { ListOfFavoritePostsStyled } from './ListOfFavoritePostsStyled';
import { PostModel } from '#models/PostModel';
import Post from '#components/post';

interface Props {}

const ListOfFavoritePosts: React.FC<Props> = (props) => {
  const { favoritePosts } = useAppSelector((state) => state.postReducer);

  return (
    <ListOfFavoritePostsStyled>
      {favoritePosts.map((post: PostModel) => (
        <Post post={post} />
      ))}
    </ListOfFavoritePostsStyled>
  );
};

export default ListOfFavoritePosts;
