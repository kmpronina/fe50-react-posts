import { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
// import { PostModel } from '../../models/PostModel';

interface Props extends PropsWithChildren {
  children: ReactNode;
}

export const ListOfFavoritePostsStyled = styled.div<Props>`
  padding: 0 15px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
