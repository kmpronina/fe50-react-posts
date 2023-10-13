import styled from 'styled-components';

export const PostStyled = styled.div<{
  id: any;
  variant: 'large' | 'medium' | 'small';
}>`
  background-color: gray;
`;

export const TextArea = styled.div<{
  variant: 'large' | 'medium' | 'small';
}>``;

export const DateStyled = styled.p<{ variant: 'large' | 'medium' | 'small' }>``;

export const TitleStyled = styled.h2<{
  variant: 'large' | 'medium' | 'small';
}>``;

export const TextStyled = styled.p<{ variant: 'large' | 'medium' | 'small' }>``;

export const ImageStyled = styled.img<{
  variant: 'large' | 'medium' | 'small';
}>``;

export const DateContainer = styled.span<{
  variant: 'large' | 'medium' | 'small';
}>``;
