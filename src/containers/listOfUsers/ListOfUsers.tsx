import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArticleIcon from '@mui/icons-material/Article';
import { Badge, BadgeProps } from '@mui/material';
import { UserModel } from '#models/UserModel';
import { useAppDispatch, useAppSelector } from '#store/store';
import { ListOfUsersStyled, UserStyled } from './ListOfUsersStyled';
import { setSelectedUserById } from '#store/reducers/userReducer/actions';
import { PostModel } from '#models/PostModel';
import UserName from '#components/userName';

const ListOfUsers: React.FC = () => {
  const { users, selectedUserId } = useAppSelector(
    (state) => state.userReducer
  );
  const { posts, favoritePosts } = useAppSelector((state) => state.postReducer);

  const dispatch = useAppDispatch();

  const [selectedUserIdState, setSelectedUserIdState] = useState<number | null>(
    null
  );

  const handleSelectUser = (userId: number) => {
    if (selectedUserId === userId) {
      setSelectedUserIdState(null);
      dispatch(setSelectedUserById(null));
    } else {
      setSelectedUserIdState(userId);
      dispatch(
        setSelectedUserById(userId === selectedUserIdState ? null : userId)
      );
    }
  };

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <ListOfUsersStyled>
      {users.map((user: UserModel) => (
        <UserStyled
          key={user.id}
          isSelected={selectedUserId === user.id ? true : false}
          onClick={() => handleSelectUser(user.id)}
        >
          <UserName name={user.name} />

          <StyledBadge
            badgeContent={
              posts.filter((post: PostModel) => post.userId === user.id).length
            }
            color="primary"
          >
            <ArticleIcon />
          </StyledBadge>

          <StyledBadge
            badgeContent={
              favoritePosts.filter((post: PostModel) => post.userId === user.id)
                .length
            }
            color="primary"
          >
            <FavoriteBorderIcon />
          </StyledBadge>
        </UserStyled>
      ))}
    </ListOfUsersStyled>
  );
};
export default ListOfUsers;
