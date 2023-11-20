import styled from 'styled-components';
import { PostVariant } from '#models/PostModel';
// import { styled } from '@mui/system';

export const PostStyled = styled.article<{
  id: any;
  variant: PostVariant;
}>`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ variant }) =>
    variant === PostVariant.VARIANT_SMALL ? '10px' : '15px'};
  /* margin: 15px; */
  border-radius: 5px;
  width: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '750px'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '350px'
      : '250px'};
`;

export const InfoArea = styled.div<{
  variant: PostVariant;
}>`
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === PostVariant.VARIANT_MEDIUM ? 'column-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
`;

export const TextArea = styled.div<{
  variant: PostVariant;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '60%'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '90%'
      : '155px'};
`;

export const TitleStyled = styled.h2<{
  variant: PostVariant;
}>`
  all: unset;
  font-size: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '24px'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '18px'
      : '10px'};
  font-weight: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '700'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '700'
      : '500'};
  color: #000;

  margin: 15px 0;
`;

export const TextStyled = styled.p<{ variant: PostVariant }>`
  all: unset;
  display: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE ? 'block' : 'none'};
  font-size: 14px;
  color: gray;
`;

export const ImageStyled = styled.div<{
  variant: PostVariant;
}>`
  width: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '250px'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '350px'
      : '75px'};
  height: ${({ variant }) =>
    variant === PostVariant.VARIANT_LARGE
      ? '250px'
      : variant === PostVariant.VARIANT_MEDIUM
      ? '300px'
      : '75px'};
  margin-bottom: ${({ variant }) =>
    variant === PostVariant.VARIANT_MEDIUM ? '10px' : '0'};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DateContainer = styled.span<{
  variant: PostVariant;
}>`
  all: unset;
  font-size: 14px;
  color: gray;
`;

export const InteractionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const LikeArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// export const InteractionButtonStyle = {
//   // all: 'unset',
//   // cursor: 'pointer',
//   // margin: '5px',
//   color: 'gray',
// };

export const SaveArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
