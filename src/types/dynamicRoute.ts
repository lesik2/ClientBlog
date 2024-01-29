import { Locale } from '@/i18n.config';

export interface IDynamicRoute {
  params: {
    lang: Locale;
    id: string;
  };
}
