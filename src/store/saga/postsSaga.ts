import { getPosts } from '#api/postService';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PostModel } from '../../models/PostModel';
import {
  setFavoritePostsToStore,
  setPostsToStore,
} from '../reducers/postReducer/actions';
import { PostReducerEnum } from '../reducers/postReducer/actionTypes';

export const getPostsSaga = () => ({ type: PostReducerEnum.GET_POSTS_SAGA });

export function* getPostsWorker() {
  const postsData: PostModel[] = yield call(getPosts);
  yield put(setPostsToStore(postsData));
  yield put(setFavoritePostsToStore(postsData.filter((post) => post.isLiked)));
}

export function* postsWatcher() {
  yield takeEvery(PostReducerEnum.GET_POSTS_SAGA, getPostsWorker);
}
