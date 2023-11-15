import React from 'react';
import {
  PageWithOnePostStyled,
  PostTitle,
  ImgWrapper,
  PostText,
} from './pageWithOnePostStyled';
// import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/store';

const PageWithOnePost: React.FC = () => {
  const location = useLocation();
  const { posts } = useAppSelector((state) => state.postReducer);

  const getSelectedId = () => {
    const postId = Number(
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );
    return postId;
  };

  return (
    <>
      <PageWithOnePostStyled>
        <ImgWrapper>
          <img src={posts[getSelectedId() - 1].imgSrc} alt="astronaut" />
        </ImgWrapper>
        <PostTitle> {posts[getSelectedId() - 1].label}</PostTitle>
        <PostText>{posts[getSelectedId() - 1].text}</PostText>
      </PageWithOnePostStyled>
    </>
  );
};

export default PageWithOnePost;
