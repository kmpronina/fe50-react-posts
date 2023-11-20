import React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark as faBookmarkRegular,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faBookmark } from '@fortawesome/free-solid-svg-icons';
import InteractionButton from './interactionButton/InteractionButton';
import { PostModel } from '#models/PostModel';
import {
  PostStyled,
  InfoArea,
  TextArea,
  DateContainer,
  TitleStyled,
  TextStyled,
  ImageStyled,
  InteractionArea,
  LikeArea,
  SaveArea,
} from './PostStyled';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  setFavoritePostsToStore,
  setPostsToStore,
} from '#store/reducers/postReducer/actions';
import { Badge } from '@mui/material';
import { CommentModel } from '#models/CommentModel';

library.add(
  faThumbsUp,
  faThumbsDown,
  faBookmark,
  faEllipsis,
  faBookmarkRegular
);

interface PostProps {
  post: PostModel;
  // variant: PostVariant;
}

const Post: React.FC<PostProps> = (props) => {
  const { post } = props;
  const { posts } = useAppSelector((state) => state.postReducer);
  const { comments } = useAppSelector((state) => state.commentReducer);
  const navigation: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoToPostPage = () => {
    navigation(`/${post.id}`);
  };

  const handleToggleLikeStatus = (postId: number) => {
    const newPosts: PostModel[] = [
      ...posts.map((post) =>
        post.id === postId ? { ...post, isLiked: !post.isLiked } : post
      ),
    ];
    dispatch(setPostsToStore(newPosts));
    dispatch(setFavoritePostsToStore(newPosts.filter((post) => post.isLiked)));
  };

  return (
    <PostStyled id={post.id} variant={post.variant} key={post.id}>
      <InfoArea variant={post.variant} onClick={handleGoToPostPage}>
        <TextArea variant={post.variant}>
          <DateContainer variant={post.variant}>{post.date}</DateContainer>
          <TitleStyled variant={post.variant}>{post.label}</TitleStyled>
          <TextStyled variant={post.variant}>{post.text}</TextStyled>
        </TextArea>
        <ImageStyled variant={post.variant}>
          <img src={post.imgSrc} alt="astronaut" />
        </ImageStyled>
      </InfoArea>
      <InteractionArea>
        <LikeArea>
          <InteractionButton>
            <FontAwesomeIcon
              icon={icon({ name: 'thumbs-up', style: 'regular' })}
            />
          </InteractionButton>
          <InteractionButton>
            <FontAwesomeIcon
              icon={icon({ name: 'thumbs-down', style: 'regular' })}
            />
          </InteractionButton>
        </LikeArea>
        <SaveArea>
          <InteractionButton onClick={() => handleToggleLikeStatus(post.id)}>
            {post.isLiked ? (
              <FontAwesomeIcon
                icon={icon({ name: 'bookmark', style: 'solid' })}
              />
            ) : (
              <FontAwesomeIcon
                icon={icon({ name: 'bookmark', style: 'regular' })}
              />
            )}
          </InteractionButton>
          <InteractionButton>
            <Badge
              badgeContent={
                comments.filter(
                  (comment: CommentModel) => comment.postId === post.id
                ).length
              }
              color="primary"
            >
              <ChatBubbleOutlineIcon
                sx={{ width: '18px', height: '18px' }}
                color="action"
              />
            </Badge>
          </InteractionButton>
        </SaveArea>
      </InteractionArea>
    </PostStyled>
  );
};

export default Post;
