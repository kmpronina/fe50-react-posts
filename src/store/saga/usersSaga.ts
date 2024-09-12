import { call, put, takeEvery } from 'redux-saga/effects';
import { getUsers } from '#api/userService';
import { UserModel } from '#models/UserModel';
import { setUsersToStore } from '../reducers/userReducer/actions';
import { UserReducerEnum } from '../reducers/userReducer/actionTypes';

export const getUsersSaga = () => ({ type: UserReducerEnum.GET_USERS_SAGA });

export function* getUsersWorker() {
  const usersData: UserModel[] = yield call(getUsers);
  yield put(setUsersToStore(usersData));
}

export function* usersWatcher() {
  yield takeEvery(UserReducerEnum.GET_USERS_SAGA, getUsersWorker);
}
