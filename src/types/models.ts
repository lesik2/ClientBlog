export interface IAuthor {
  id: string;
  fullName: string;
  description: string;
  iconSrc: string;
}
export interface IPostCard {
  id: string;
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  size?: 'default' | 'medium' | 'small';
  authorId: string;
  date: string;
  category: string;
}
export interface ICategoryCard {
  iconSrc: string;
  category: string;
  description: string;
}
export interface ILocation {
  id: number;
  latitude: number;
  longitude: number;
}
