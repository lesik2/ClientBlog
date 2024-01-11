'use client';
import { CONSTANTS, LINKS } from './constants';
import Link from 'next/link';
import style from '@styles/ui/header.module.scss';
import button from '@styles/ui/button.module.scss';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <header className={style.header}>
      <p className={style.title}>{CONSTANTS.title}</p>
      <div className={style.wrapper}>
        <nav>
          <ul className={style.list}>
            {LINKS.map((link) => (
              <li key={link.name}>
                <Link className={`${pathname === link.to ? style.active : ''} ${style.link}`} href={link.to}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button type='button' className={button.secondary}>
          {CONSTANTS.btn}
        </button>
      </div>
    </header>
  );
}
