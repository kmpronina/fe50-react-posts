import { CommentReducerEnum } from './actionTypes';
import { CommentModel } from '#models/CommentModel';

export const setCommentsToStore = (comments: CommentModel[]) => {
  return { type: CommentReducerEnum.SET_COMMENTS, comments };
};
