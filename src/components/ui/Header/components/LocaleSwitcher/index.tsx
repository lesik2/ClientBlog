'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import button from '@styles/ui/button.module.scss';

import header from '../../header.module.scss';

import { i18n } from '@/i18n.config';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <ul className={header.wrapperLocale}>
      {i18n.locales.map((locale) => (
        <li key={locale}>
          <Link href={redirectedPathName(locale)} className=''>
            <button type='button' className={`${button.primary} ${header.localeBtn}`}>
              {locale}
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}
