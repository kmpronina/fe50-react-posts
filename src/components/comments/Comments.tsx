import React from 'react';
import { CommentModel } from '#models/CommentModel';
import {
  CommentsWrapperStyled,
  CommentStyled,
  CommentTitleStyled,
  CommentEmailStyled,
  CommentBody,
  CommentsStyled,
} from './CommentStyled';

interface Props {
  comments: CommentModel[];
}
const Comments: React.FC<Props> = (props) => {
  const { comments } = props;

  return (
    <CommentsWrapperStyled>
      <CommentsStyled>
        {comments.map((comment: CommentModel) => (
          <CommentStyled>
            <CommentEmailStyled>
              Comment from: {comment.email}
            </CommentEmailStyled>
            <CommentTitleStyled>{comment.name}</CommentTitleStyled>
            <CommentBody>{comment.body}</CommentBody>
          </CommentStyled>
        ))}
      </CommentsStyled>
    </CommentsWrapperStyled>
  );
};
export default Comments;
