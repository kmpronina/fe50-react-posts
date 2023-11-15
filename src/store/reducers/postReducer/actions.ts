// import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { PostReducerEnum } from './actionTypes';
import { PostModel } from '#models/PostModel';
// import { getPosts } from '#api/postService';

// export const getPostsDataAction =
//   () => async (dispatch: Dispatch<AnyAction>) => {
//     if (dispatch === undefined) return;
//     const data = await getPosts();
//     dispatch(setPostsToStore(data));
//     dispatch(setFavoritePostsToStore(data.filter((post) => post.isLiked)));
//   };

export const setPostsToStore = (posts: PostModel[]) => {
  return { type: PostReducerEnum.SET_POSTS, posts };
};

export const setFavoritePostsToStore = (favoritePosts: PostModel[]) => {
  return { type: PostReducerEnum.SET_FAVORITE_POSTS, favoritePosts };
};

export const setSelectedPostById = (selectedPost: PostModel) => {
  return { type: PostReducerEnum.SET_SELECTED_POST, selectedPost };
};
