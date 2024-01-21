'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { INavigation } from '@customTypes/ui';

import nav from './navigation.module.scss';

import { HEADER_LINKS } from '../Header/constants';
import { FOOTER_LINKS } from '../Footer/constants';

export function Navigation({ type, nameOfLinks, setIsOpen, isFooter }: INavigation) {
  const pathname = usePathname();
  const paths = `/${pathname.split('/').slice(2).join('')}`;

  const links = type === 'footer' ? FOOTER_LINKS : HEADER_LINKS;

  const handleCloseMenu = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className={`${isFooter ? nav.inactive : ''} ${nav.navigation}`}>
      <ul className={nav.list}>
        {links.map((link, index) => (
          <li className={nav.item} key={link.to} onClick={handleCloseMenu}>
            <Link className={`${paths === link.to ? nav.active : ''} ${nav.link}`} href={link.to}>
              {nameOfLinks[index]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
