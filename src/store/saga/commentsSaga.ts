import { call, put, takeEvery } from 'redux-saga/effects';
import { getComments } from '#api/commentService';
import { CommentReducerEnum } from '#store/reducers/commentReducer/actionTypes';
import { CommentModel } from '#models/CommentModel';
import { setCommentsToStore } from '#store/reducers/commentReducer/actions';

export const getCommentsSaga = () => ({
  type: CommentReducerEnum.GET_COMMENTS_SAGA,
});

export function* getCommentsWorker() {
  const commentsData: CommentModel[] = yield call(getComments);
  yield put(setCommentsToStore(commentsData));
}

export function* commentsWatcher() {
  yield takeEvery(CommentReducerEnum.GET_COMMENTS_SAGA, getCommentsWorker);
}
