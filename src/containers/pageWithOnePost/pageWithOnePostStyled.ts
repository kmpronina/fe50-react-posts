import { ReactNode } from 'react';
import styled from 'styled-components';

export const PageWithOnePostStyled = styled.div<{
  children: ReactNode;
}>`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;
`;

export const PostTitle = styled.h2<{
  children: ReactNode;
}>`
  all: unset;
  width: 65%;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  word-spacing: 10px;
  text-align: center;
`;

export const ImgWrapper = styled.div<{ children: ReactNode }>`
  width: 50%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostText = styled.div<{ children: ReactNode }>`
  width: 75%;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 50px;
`;
