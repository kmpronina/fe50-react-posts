import React from 'react';
import { PostModel } from '../../models/PostModel';
import {
  PostStyled,
  TextArea,
  DateContainer,
  TitleStyled,
  TextStyled,
  ImageStyled,
} from './PostStyled';

interface CardProps {
  card: PostModel;
}

const Post: React.FC<CardProps> = (props) => {
  const { card } = props;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString([], options);
  };

  return (
    <PostStyled id={card.id} variant={card.variant} key={card.id}>
      <TextArea variant={card.variant}>
        <DateContainer variant={card.variant}>
          {formatDate(card.date)}
        </DateContainer>
        <TitleStyled variant={card.variant}>{card.title}</TitleStyled>
        <TextStyled variant={card.variant}>{card.text}</TextStyled>
      </TextArea>
      <ImageStyled variant={card.variant}>
        {/* <img src={imgSrc} alt="astronaut" /> */}
      </ImageStyled>
    </PostStyled>
  );
};

export default Post;
