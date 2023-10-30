import Header from '#containers/header';
import PageWithOnePost from '#containers/pageWithOnePost';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { postsCardsMockArray } from '../../api/postsCardsMockArray';
import { PostModel } from '../../models/PostModel';

const PostPage = () => {
  const location = useLocation();

  const [post, setPost] = useState<PostModel | undefined>(undefined);
  useEffect(() => {
    const postId = Number(
      location.pathname.split('/')[location.pathname.split('/').length - 2]
    );
    setPost(postsCardsMockArray.find((post) => post.id === postId));
  }, [location]);

  return (
    <>
      <Header />
      <PageWithOnePost />
    </>
  );
};

export default PostPage;
