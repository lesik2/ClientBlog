import { ROUTES } from '@constants/routes';

export const CONSTANTS = {
  title: 'Modsen Client Blog',
} as const;
export const HEADER_LINKS = [
  {
    to: ROUTES.home,
  },
  {
    to: ROUTES.blog,
  },
  {
    to: ROUTES.aboutUs,
  },
  {
    to: ROUTES.contact,
  },
] as const;
