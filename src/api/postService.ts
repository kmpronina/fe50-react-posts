import { PostModel, PostFromResponse, PostVariant } from '#models/PostModel';

// type PhotoType = {
//   albumId: number;
//   id: number;
//   title: string;
//   url: string;
//   thumbnailUrl: string;
// };

// const getPhoto = async (photoId: number) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/photos/${photoId}`
//   );
//   const data: PhotoType = await response.json();
//   return data.url;
// };

export const getPosts = async (): Promise<PostModel[]> => {
  const raw = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: PostFromResponse[] = await raw.json();
  const rawDate = new Date();
  const random = () => {
    return Math.floor(Math.random() * 10);
  };

  const formatedData = data.map((post) => ({
    userId: post.userId,
    id: post.id,
    imgSrc: 'https://random.imagecdn.app/1250/750',
    // `${getPhoto(post.id)}`,
    text: post.body,
    date: rawDate.toDateString(),
    label: post.title,
    isLiked: false,
    variant:
      random() > 4
        ? PostVariant.VARIANT_SMALL
        : random() > 8
        ? PostVariant.VARIANT_LARGE
        : PostVariant.VARIANT_MEDIUM,
  }));
  return formatedData;
};
