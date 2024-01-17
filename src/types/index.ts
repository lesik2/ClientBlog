import { Dispatch, FC, ReactNode } from 'react';

import { IAuthor, IPostCard } from './models';

import { Dictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export interface IPost {
  title: string;
  author: string;
  date: string;
}
export interface ISnackbar {
  message: string;
}
export interface IWrapperButtons {
  handleClickNext: () => void;
  handleClickPrev: () => void;
}
export interface IInfinityScroll {
  dictionary: Dictionary;
}

export interface IDropDown {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  selectValues: string[];
}
export interface ISubscribeForm {
  placeholder: string;
  btnText: string;
}
export type TSubscribeEmail = {
  user_email: string;
};

export interface ISlider {
  children: ReactNode[];
  WrapperButtons: FC<IWrapperButtons>;
}
export type TMessageEmail = {
  user_name: string;
  user_email: string;
  message: string;
};

export interface IReviewCard {
  iconSrc: string;
  text: string;
  userName: string;
  userAddress: string;
}

export interface IBlogPost {
  params: {
    lang: Locale;
    id: string;
  };
}
export interface IHeaderBlogPost {
  author: IAuthor;
  post: IPostCard;
}
