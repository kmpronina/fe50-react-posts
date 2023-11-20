import { Reducer } from '@reduxjs/toolkit';
import { UserModel } from '#models/UserModel';
import { UserReducerEnum } from './actionTypes';

type UsersReducerType = {
  users: UserModel[];
  selectedUserId: number | null;
};

const defaultState = {
  users: [],
  selectedUserId: null,
};

const userReducer: Reducer<UsersReducerType> = (
  state = defaultState,
  action
) => {
  if (action.type === UserReducerEnum.SET_USERS) {
    return { ...state, users: action.users };
  }
  if (action.type === UserReducerEnum.SET_SELECTED_USER) {
    // console.log(se)
    return { ...state, selectedUserId: action.selectedUserId };
  } else return { ...state };
};

export default userReducer;
