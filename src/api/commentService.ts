import { CommentModel } from '#models/CommentModel';

export const getComments = async (): Promise<CommentModel[]> => {
  const rawData = await fetch('https://jsonplaceholder.typicode.com/comments');
  return await rawData.json();
};

export const saveComment = async (commentData: CommentModel) => {
  const rawData = await fetch('https://jsonplaceholder.typicode.com/comments', {
    method: 'POST',
    body: JSON.stringify(commentData),
  });
  return await rawData.json();
};
