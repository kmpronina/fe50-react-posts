import React from 'react';
import {
  PageWithOnePostStyled,
  PostTitle,
  ImgWrapper,
  PostText,
} from './pageWithOnePostStyled';
import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import { useLocation } from 'react-router-dom';

const PageWithOnePost: React.FC = () => {
  const location = useLocation();

  const getSelectedId = () => {
    const postId = Number(
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );

    return postId;
  };
  return (
    <PageWithOnePostStyled>
      <ImgWrapper>
        <img
          src={postsCardsMockArray[getSelectedId() - 1].imgSrc}
          alt="astronaut"
        />
      </ImgWrapper>
      <PostTitle> {postsCardsMockArray[getSelectedId() - 1].title}</PostTitle>
      <PostText>{postsCardsMockArray[getSelectedId() - 1].text}</PostText>
    </PageWithOnePostStyled>
  );
};

export default PageWithOnePost;
