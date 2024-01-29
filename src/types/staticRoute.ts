import { Locale } from '@/i18n.config';
import { Dictionary } from '@/lib/dictionary';

export interface IStaticRoute {
  lang: Locale;
  dictionary: Dictionary;
}
