import { ReactNode } from 'react';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  children: ReactNode;
}

export const ListOfPostsStyled = styled.div<Props>`
  padding: 0 15px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const ListOfPostsLeftArea = styled.div<Props>`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  wrap: wrap;
`;

export const MainPost = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const MediumPosts = styled.div<Props>`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListOfPostsRightArea = styled.div<Props>`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
