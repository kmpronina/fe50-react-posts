import React, { useEffect, useState } from 'react';
import { UserName } from '#components/UserName';
import { UserModel } from '#models/UserModel';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  ListOfUsersStyled,
  UserStyled,
  PostsCounterStyled,
} from './ListOfUsersStyled';
import { getUsersSaga } from '#store/saga/usersSaga';
import { setSelectedUserById } from '#store/reducers/userReducer/actions';
import { PostModel } from '#models/PostModel';

const ListOfUsers: React.FC = () => {
  const { users, selectedUserId } = useAppSelector(
    (state) => state.userReducer
  );
  const { posts, favoritePosts } = useAppSelector((state) => state.postReducer);

  const dispatch = useAppDispatch();

  const [selectedUserIdState, setSelectedUserIdState] = useState<number | null>(
    null
  );

  useEffect(() => {
    dispatch(getUsersSaga());
  }, []);

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

  return (
    <ListOfUsersStyled>
      {users.map((user: UserModel) => (
        <UserStyled
          key={user.id}
          isSelected={selectedUserId === user.id ? true : false}
          onClick={() => handleSelectUser(user.id)}
        >
          <UserName name={user.name} />
          <PostsCounterStyled>
            <>
              {' '}
              -{' '}
              {
                posts.filter((post: PostModel) => post.userId === user.id)
                  .length
              }
              /
              {
                favoritePosts.filter(
                  (post: PostModel) => post.userId === user.id
                ).length
              }
            </>
          </PostsCounterStyled>
        </UserStyled>
      ))}
    </ListOfUsersStyled>
  );
};
export default ListOfUsers;
