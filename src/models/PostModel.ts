export type PostModel = {
  id: number;
  imgSrc: string;
  text: string;
  date: string;
  label: string;
  variant: 'large' | 'medium' | 'small';
  isLiked: boolean;
};
