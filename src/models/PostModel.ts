export type PostModel = {
  userId: number;
  id: number;
  imgSrc?: any;
  text: string;
  date: string;
  label: string;
  variant: PostVariant;
  isLiked: boolean;
};

export type PostFromResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export enum PostVariant {
  VARIANT_SMALL = 'VARIANT_SMALL',
  VARIANT_MEDIUM = 'VARIANT_MEDIUM',
  VARIANT_LARGE = 'VARIANT_LARGE',
}
