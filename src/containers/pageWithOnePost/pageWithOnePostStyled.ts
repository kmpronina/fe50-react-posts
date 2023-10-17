import { ReactNode } from 'react';
import styled from 'styled-components';

export const PageWithOnePostStyled = styled.div<{
  children: ReactNode;
}>`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const PostTitle = styled.h2<{
  children: ReactNode;
}>`
  all: unset;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  word-spacing: 10px;
  text-align: center;
`;

export const ImgWrapper = styled.div<{ children: ReactNode }>`
  width: 90%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostText = styled.div<{ children: ReactNode }>`
  font-size: 16px;
  font-weight: 300;
`;
