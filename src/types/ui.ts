import { Dispatch, SetStateAction } from 'react';

import { Locale } from '@/i18n.config';

export interface IButton {
  type: 'secondary' | 'primary';
}
export interface INavigation {
  type: 'header' | 'footer';
  nameOfLinks: string[];
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  isFooter: boolean;
  lang: Locale;
}
