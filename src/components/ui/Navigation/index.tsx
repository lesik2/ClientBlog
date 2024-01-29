'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavigation } from '@customTypes/ui';
import isEqual from 'lodash.isequal';
import { memo } from 'react';

import nav from './navigation.module.scss';

import { HEADER_LINKS } from '../Header/constants';
import { FOOTER_LINKS } from '../Footer/constants';

export const Navigation = memo(({ type, nameOfLinks, setIsOpen, isFooter, lang }: INavigation) => {
  const pathname = usePathname();
  const paths = `/${pathname.split('/').slice(2).join('')}`;

  const links = type === 'footer' ? FOOTER_LINKS : HEADER_LINKS;

  const handleCloseMenu = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav data-cy='navigation' className={`${isFooter ? nav.inactive : ''} ${nav.navigation}`}>
      <ul className={nav.list} data-cy='navigation-list'>
        {links.map((link, index) => (
          <li className={nav.item} key={link.to} onClick={handleCloseMenu}>
            <Link
              data-cy={`${isFooter ? 'footer-' : 'header-'}${link.to}`}
              className={`${paths === link.to ? nav.active : ''} ${nav.link}`}
              href={`/${lang}${link.to}`}
            >
              {nameOfLinks[index]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}, isEqual);
