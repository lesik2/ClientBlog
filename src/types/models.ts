import { Locale } from '@/i18n.config';

export interface IAuthor {
  id: string;
  fullName: string;
  description: string;
  iconSrc: string;
  lang: Locale;
}
export interface IPostCard {
  id: string;
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  size?: 'default' | 'small';
  authorId: string;
  date: string;
  category: string;
  lang: Locale;
}
export interface ICategoryCard {
  iconSrc: string;
  category: string;
  description: string;
  lang: Locale;
}
export interface ILocation {
  id: number;
  latitude: number;
  longitude: number;
}

export type Tags =
  | 'Business'
  | 'Experience'
  | 'Screen'
  | 'Technology'
  | 'Marketing'
  | 'Life'
  | 'Economy'
  | 'Startup';
