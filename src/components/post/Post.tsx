import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { PostModel } from '../../models/PostModel';
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
  InteractionButton,
} from './PostStyled';

library.add(faThumbsUp, faThumbsDown, faBookmark, faEllipsis);

interface PostProps {
  post: PostModel;
}

const Post: React.FC<PostProps> = (props) => {
  const { post } = props;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  return (
    <PostStyled id={post.id} variant={post.variant} key={post.id}>
      <InfoArea variant={post.variant}>
        <TextArea variant={post.variant}>
          <DateContainer variant={post.variant}>
            {formatDate(post.date)}
          </DateContainer>
          <TitleStyled variant={post.variant}>{post.title}</TitleStyled>
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
          <InteractionButton>
            <FontAwesomeIcon
              icon={icon({ name: 'bookmark', style: 'regular' })}
            />
          </InteractionButton>
          <InteractionButton>
            <FontAwesomeIcon
              icon={icon({ name: 'ellipsis', style: 'solid' })}
            />
          </InteractionButton>
        </SaveArea>
      </InteractionArea>
    </PostStyled>
  );
};

export default Post;
