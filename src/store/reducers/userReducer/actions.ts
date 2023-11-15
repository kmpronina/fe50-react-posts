// import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { UserReducerEnum } from './actionTypes';
// import { getUsers } from '#api/userService';
import { UserModel } from '#models/UserModel';

// export const getUsersDataAction =
//   () => async (dispatch: Dispatch<AnyAction>) => {
//     if (dispatch === undefined) return;
//     const data = await getUsers();
//     dispatch(setUsersToStore(data));
//   };

export const setUsersToStore = (users: UserModel[]) => {
  return { type: UserReducerEnum.SET_USERS, users };
};

export const setSelectedUserById = (selectedUserId: number | null) => {
  console.log(selectedUserId, 'selected user ID in reducer.actions');
  return { type: UserReducerEnum.SET_SELECTED_USER, selectedUserId };
};
