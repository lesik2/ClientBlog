import { Dispatch, SetStateAction } from 'react';

export interface IButton {
  type: 'secondary' | 'primary';
}
export interface INavigation {
  type: 'header' | 'footer';
  nameOfLinks: string[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isFooter: boolean;
}
