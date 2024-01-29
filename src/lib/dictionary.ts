import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('../../dictionaries/en.json').then((module) => module.default),
  ru: () => import('../../dictionaries/ru.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
