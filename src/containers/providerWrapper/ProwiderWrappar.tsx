import React, { PropsWithChildren, useEffect } from 'react';
import { getPostsSaga } from '#store/saga/postsSaga';
import { useAppDispatch, useAppSelector } from '#store/store';
import { ProviderWrapperStyled } from './ProviderWrapperStyled';
import { getUsersSaga } from '#store/saga/usersSaga';
import { getCommentsSaga } from '#store/saga/commentsSaga';

interface Props extends PropsWithChildren {}

const ProviderWrapper: React.FC<Props> = (props) => {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsSaga());
    dispatch(getUsersSaga());
    dispatch(getCommentsSaga());
  }, []);

  return <ProviderWrapperStyled>{children}</ProviderWrapperStyled>;
};
export default ProviderWrapper;
