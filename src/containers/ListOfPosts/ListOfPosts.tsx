import React, { useEffect, useState } from 'react';
import Post from '#components/post';
import { useAppSelector } from '#store/store';
import { PostModel, PostVariant } from '#models/PostModel';
import {
  ListOfPostsStyled,
  ListOfPostsLeftArea,
  ListOfPostsRightArea,
  MainPost,
  MediumPosts,
} from './ListOfPostsStyled';
// import { Button } from '@mui/material';

interface Props {}

const ListOfPosts: React.FC<Props> = (props) => {
  const { posts } = useAppSelector((state) => state.postReducer);
  // const { comments } = useAppSelector((state) => state.commentReducer);
  const { selectedUserId } = useAppSelector((state) => state.userReducer);
  const [postsToShow, setPostsToShow] = useState<PostModel[]>([]);

  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getData = async () => {
  //     const data = await getPosts();
  //     console.log('data', data);
  //     dispatch(setPostsToStore(data));
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, [setIsLoading]);

  useEffect(() => {
    setPostsToShow(
      posts.filter((post: PostModel) =>
        selectedUserId != null ? post.userId === selectedUserId : post
      )
    );
  }, [selectedUserId, posts]);

  // const handleCklick = () => {
  //   console.log(posts);
  // };

  return (
    <ListOfPostsStyled>
      {/* {isLoading && `${'Getting posts...'}`}
      {!isLoading && ( */}
      <ListOfPostsLeftArea>
        {/* <Button onClick={handleCklick}>Click me</Button> */}
        <MainPost>
          {postsToShow
            .filter(
              (post: PostModel) => post.variant === PostVariant.VARIANT_LARGE
            )
            .map((post: PostModel) => (
              <Post post={post} />
            ))}
        </MainPost>
        <MediumPosts>
          {postsToShow
            .filter(
              (post: PostModel) => post.variant === PostVariant.VARIANT_MEDIUM
            )
            .map((post: PostModel) => (
              <Post post={post} />
            ))}
        </MediumPosts>
      </ListOfPostsLeftArea>
      <ListOfPostsRightArea>
        {postsToShow
          .filter(
            (post: PostModel) => post.variant === PostVariant.VARIANT_SMALL
          )
          .map((post: PostModel) => (
            <Post post={post} />
          ))}
      </ListOfPostsRightArea>
      {/* )} */}
    </ListOfPostsStyled>
  );
};

export default ListOfPosts;
