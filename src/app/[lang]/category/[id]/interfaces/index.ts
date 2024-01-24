import { Dispatch, SetStateAction } from 'react';

export interface IElasticSearch {
  setSearch: Dispatch<SetStateAction<string>>;
}
export interface ICategories {
  activeCategory: string;
}
export interface ITags {
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
}
