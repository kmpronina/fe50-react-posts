import { all } from 'redux-saga/effects';
import { commentsWatcher } from './commentsSaga';
import { postsWatcher } from './postsSaga';
import { usersWatcher } from './usersSaga';

export function* appWatcher() {
  yield all([usersWatcher(), postsWatcher(), commentsWatcher()]);
}
