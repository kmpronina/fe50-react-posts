import React from 'react';
import Header from '#containers/header';
import { useAppSelector } from '../../store/store';
import { PostModel } from '../../models/PostModel';
import Post from '#components/post';

const FavoritePotstPage = () => {
  const { favoritePosts } = useAppSelector((state) => state.postReducer);

  return (
    <div>
      <Header />
      {favoritePosts.map((post: PostModel) => (
        <Post post={post} />
      ))}
    </div>
  );
};
export default FavoritePotstPage;
