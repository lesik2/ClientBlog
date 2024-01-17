'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import nav from '@styles/ui/navigation.module.scss';
import { INavigation } from '@customTypes/ui';

import { HEADER_LINKS } from './Header/constants';
import { FOOTER_LINKS } from './Footer/constants';

export function Navigation({ type, nameOfLinks }: INavigation) {
  const pathname = usePathname();
  const paths = `/${pathname.split('/').slice(2).join('')}`;

  const links = type === 'footer' ? FOOTER_LINKS : HEADER_LINKS;

  return (
    <nav>
      <ul className={nav.list}>
        {links.map((link, index) => (
          <li key={link.name}>
            <Link className={`${paths === link.to ? nav.active : ''} ${nav.link}`} href={link.to}>
              {nameOfLinks[index]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
