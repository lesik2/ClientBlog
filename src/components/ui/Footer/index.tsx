'use client';
import style from '@styles/ui/footer.module.scss';
import button from '@styles/ui/button.module.scss';
import Image from 'next/image';
import { CONSTANTS, LINKS, ICONS } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.title}>{CONSTANTS.title}</p>
          <nav>
            <ul className={style.list}>
              {LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    className={`${pathname === link.to ? style.active : ''} ${style.link}`}
                    href={link.to}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className={style.submitWrapper}>
          <h2 className={style.subtitle}>{CONSTANTS.subtitle}</h2>
          <div className={style.submitForm}>
            <input placeholder={CONSTANTS.placeholder} className={style.input} />
            <button className={button.primary} type='submit'>
              {CONSTANTS.btn}
            </button>
          </div>
        </div>
        <div className={style.contactsWrapper}>
          <div className={style.contactsInfo}>
            <p className={style.contact}>{CONSTANTS.address}</p>
            <p className={style.contact}>{CONSTANTS.email}</p>
          </div>
          <div className={style.socialWrapper}>
            {ICONS.map((icon)=>(
              <a key={icon.src}  className={style.socialLink} href='/'>
                <Image {...icon}/>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
