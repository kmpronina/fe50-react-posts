import Header from '#containers/header';
import PageWithOnePost from '#containers/pageWithOnePost';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import { PostModel } from '#models/PostModel';
import { useAppSelector } from '#store/store';

const PostPage = () => {
  const location = useLocation();
  const [post, setPost] = useState<PostModel | undefined>(undefined);

  const { posts } = useAppSelector((state) => state.postReducer);

  useEffect(() => {
    const postId = Number(
      location.pathname.split('/')[location.pathname.split('/').length - 2]
    );
    setPost(posts.find((post: PostModel) => post.id === postId));
  }, [location]);

  return (
    <>
      <Header />
      <PageWithOnePost />
    </>
  );
};

export default PostPage;
