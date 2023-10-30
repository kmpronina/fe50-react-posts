import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from '#components/post';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { getPosts } from '#api/postService';
import { setPostsToStore } from '../../store/reducers/postReducer/actions';
import { PostModel } from '../../models/PostModel';

interface Props {}

const ListOfPosts: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.postReducer);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const data = await getPosts();
      console.log('data', data);
      dispatch(setPostsToStore(data));
      setIsLoading(false);
    };
    getData();
  }, [setIsLoading]);

  return (
    <ListOfPostsStyled>
      {isLoading && `${'Getting posts...'}`}
      {!isLoading && posts.map((post: PostModel) => <Post post={post} />)}
    </ListOfPostsStyled>
  );
};

export default ListOfPosts;

const ListOfPostsStyled = styled.div<{ children: any }>`
height: 700px
background-color: blue`;
