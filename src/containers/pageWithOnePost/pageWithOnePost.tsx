import React, { BaseSyntheticEvent, useState } from 'react';
import {
  PageWithOnePostStyled,
  PostTitle,
  ImgWrapper,
  PostText,
} from './pageWithOnePostStyled';
// import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '#store/store';
import Comments from '#components/comments';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from '@mui/material';
import { saveComment } from '#api/commentService';

const PageWithOnePost: React.FC = () => {
  const location = useLocation();
  const { posts } = useAppSelector((state) => state.postReducer);
  const { comments } = useAppSelector((state) => state.commentReducer);

  const [openDialog, setOpenDialog] = useState(false);

  const [commentEmailValue, setCommentEmailValue] = useState<string>('');
  const [commentTitleValue, setCommentTitleValue] = useState<string>('');
  const [commentBodyValue, setCommentBodyValue] = useState<string>('');

  const getSelectedId = () => {
    const postId = Number(
      location.pathname.split('/')[location.pathname.split('/').length - 1]
    );
    return postId - 1;
  };
  const handleChangeCommentEmail = (e: BaseSyntheticEvent) => {
    setCommentEmailValue(e.target.value);
  };

  const handleChangeCommentTitle = (e: BaseSyntheticEvent) => {
    setCommentTitleValue(e.target.value);
  };

  const handleChangeCommentBody = (e: BaseSyntheticEvent) => {
    setCommentBodyValue(e.target.value);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveComment = async () => {
    const data = saveComment({
      postId: getSelectedId(),
      id: comments.length + 1,
      name: commentTitleValue,
      email: commentEmailValue,
      body: commentBodyValue,
    });
    console.log(data);
    setOpenDialog(false);
  };

  return (
    <>
      <PageWithOnePostStyled>
        <ImgWrapper>
          <img src={posts[getSelectedId()].imgSrc} alt="astronaut" />
        </ImgWrapper>
        <PostTitle> {posts[getSelectedId()].label}</PostTitle>
        <PostText>{posts[getSelectedId()].text}</PostText>
        <Button variant="outlined" onClick={handleOpenDialog}>
          Leave your comment
        </Button>
      </PageWithOnePostStyled>
      <Comments
        comments={comments.filter(
          (comment) => comment.postId === posts[getSelectedId()].id
        )}
      />

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Comment</DialogTitle>
        <DialogContent>
          <DialogContentText>Add some information</DialogContentText>
          <TextField
            autoFocus
            value={commentEmailValue}
            onChange={handleChangeCommentEmail}
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={commentTitleValue}
            onChange={handleChangeCommentTitle}
            margin="dense"
            id="title"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            value={commentBodyValue}
            onChange={handleChangeCommentBody}
            margin="dense"
            id="body"
            label="Comment"
            type="body"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveComment}>Save comment</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PageWithOnePost;
