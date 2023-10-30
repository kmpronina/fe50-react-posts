// export const getPost = async (postId: number) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   );
//   const data = await response.json();
//   return data;
// };

import { PostModel } from '../models/PostModel';
import { postsCardsMockArray } from './postsCardsMockArray';

export const getPosts = async () => {
  const newPosts: PostModel[] = await new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(postsCardsMockArray as PostModel[]);

      clearTimeout(timer);
    }, 500);
  });

  return newPosts;
};
