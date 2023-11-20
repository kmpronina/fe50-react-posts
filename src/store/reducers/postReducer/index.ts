import { Reducer } from '@reduxjs/toolkit';
import { PostReducerEnum } from './actionTypes';
import { PostModel } from '#models/PostModel';

type PostReducerType = {
  posts: PostModel[];
  favoritePosts: PostModel[];
  selectedPost: PostModel | undefined;
};

const defaultState: PostReducerType = {
  posts: [],
  favoritePosts: [],
  selectedPost: undefined,
};

const postReducer: Reducer<PostReducerType> = (
  state = defaultState,
  action
) => {
  if (action.type === PostReducerEnum.SET_POSTS) {
    return { ...state, posts: action.posts };
  }
  if (action.type === PostReducerEnum.SET_FAVORITE_POSTS) {
    return {
      ...state,
      favoritePosts: action.favoritePosts,
    };
  }
  if (action.type === PostReducerEnum.SET_SELECTED_POST) {
    return {
      ...state,
      selectedPost: action.selectedPost,
    };
  } else return { ...state };
};

export default postReducer;
