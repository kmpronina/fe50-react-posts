import styled from 'styled-components';
import { Button } from '@mui/material';
// import { styled } from '@mui/system';

export const PostStyled = styled.div<{
  id: any;
  variant: 'large' | 'medium' | 'small';
}>`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ variant }) => (variant === 'small' ? '10px' : '15px')};
  margin: 15px;
  border-radius: 5px;
  width: ${({ variant }) =>
    variant === 'large' ? '750px' : variant === 'medium' ? '375px' : '250px'};
`;

export const InfoArea = styled.div<{
  variant: 'large' | 'medium' | 'small';
}>`
  display: flex;
  flex-direction: ${({ variant }) =>
    variant === 'medium' ? 'column-reverse' : 'row'};
  justify-content: space-between;
  align-items: center;
`;

export const TextArea = styled.div<{
  variant: 'large' | 'medium' | 'small';
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: ${({ variant }) =>
    variant === 'large' ? '60%' : variant === 'medium' ? '90%' : '70%'};
`;

export const TitleStyled = styled.h2<{
  variant: 'large' | 'medium' | 'small';
}>`
  all: unset;
  font-size: ${({ variant }) =>
    variant === 'large' ? '24px' : variant === 'medium' ? '18px' : '12px'};
  font-weight: ${({ variant }) =>
    variant === 'large' ? '700' : variant === 'medium' ? '700' : '500'};
  color: #000;
  margin: 15px 0;
`;

export const TextStyled = styled.p<{ variant: 'large' | 'medium' | 'small' }>`
  all: unset;
  display: ${({ variant }) => (variant === 'large' ? 'block' : 'none')};
  font-size: 14px;
  color: gray;
`;

export const ImageStyled = styled.div<{
  variant: 'large' | 'medium' | 'small';
}>`
  width: ${({ variant }) =>
    variant === 'large' ? '250px' : variant === 'medium' ? '350px' : '75px'};
  height: ${({ variant }) =>
    variant === 'large' ? '250px' : variant === 'medium' ? '300px' : '75px'};
  margin-bottom: ${({ variant }) => (variant === 'medium' ? '10px' : '0')};
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DateContainer = styled.span<{
  variant: 'large' | 'medium' | 'small';
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
