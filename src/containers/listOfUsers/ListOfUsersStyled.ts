import styled from 'styled-components';

export const ListOfUsersStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
`;

export const UserStyled = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 15px;
  background-color: ${({ isSelected }) =>
    isSelected === true ? '#f0f8ff' : ''};
  border-radius: 10px;
`;

export const PostsCounterStyled = styled.span`
  font-size: 12px;
  color: gray;
`;
