import styled from 'styled-components';

export const CommentsWrapperStyled = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const CommentsStyled = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const CommentStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between;
  align-items: center; */
  gap: 5px;
`;

export const CommentTitleStyled = styled.h3`
  all: unset;
  font-size: 18px;
  font-weight: 500;
`;
export const CommentEmailStyled = styled.span`
  font-size: 14px;
  color: gray;
`;

export const CommentBody = styled.span`
  font-size: 14px;
`;
