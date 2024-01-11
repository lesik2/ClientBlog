'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import nav from '@styles/ui/navigation.module.scss';

import { HEADER_LINKS } from './Header/constants';
import { FOOTER_LINKS } from './Footer/constants';

export interface INavigation {
  type: 'header' | 'footer';
}
export function Navigation({ type }: INavigation) {
  const pathname = usePathname();
  const links = type === 'footer' ? FOOTER_LINKS : HEADER_LINKS;

  return (
    <nav>
      <ul className={nav.list}>
        {links.map((link) => (
          <li key={link.name}>
            <Link className={`${pathname === link.to ? nav.active : ''} ${nav.link}`} href={link.to}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}