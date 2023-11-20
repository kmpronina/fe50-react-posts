import { Reducer } from '@reduxjs/toolkit';
import { CommentModel } from '#models/CommentModel';
import { CommentReducerEnum } from './actionTypes';

type CommentsReducerType = {
  comments: CommentModel[];
};

const defaultState = {
  comments: [],
};

const userReducer: Reducer<CommentsReducerType> = (
  state = defaultState,
  action
) => {
  if (action.type === CommentReducerEnum.SET_COMMENTS) {
    return { ...state, comments: action.comments };
  } else return { ...state };
};

export default userReducer;
