import { FC, ReactNode } from 'react';

export interface IWrapperButtons {
  handleClickNext: () => void;
  handleClickPrev: () => void;
}

export interface ISlider {
  children: ReactNode[];
  WrapperButtons: FC<IWrapperButtons>;
}

export interface IReviewCard {
  iconSrc: string;
  text: string;
  userName: string;
  userAddress: string;
}
