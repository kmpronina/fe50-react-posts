import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import postReducer from './reducers/postReducer';
import { appWatcher } from './saga';
import userReducer from './reducers/userReducer';
import commentReducer from './reducers/commentReducer';

const appReducer = combineReducers({
  postReducer,
  userReducer,
  commentReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(appWatcher);

export type AppStateType = ReturnType<typeof appReducer>;
export type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
