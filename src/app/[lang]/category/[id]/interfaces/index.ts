import { Dispatch, SetStateAction } from 'react';

import { Locale } from '@/i18n.config';

export interface IElasticSearch {
  setSearch: Dispatch<SetStateAction<string>>;
}
export interface ICategories {
  activeCategory: string;
  lang: Locale;
}
export interface ITags {
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
}
