'use client';

import style from '@styles/ui/footer.module.scss';
import button from '@styles/ui/button.module.scss';
import Image from 'next/image';

import { CONSTANTS, ICONS } from './constants';

import { Navigation } from '../Navigation';

export function Footer() {


  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.title}>{CONSTANTS.title}</p>
          <Navigation type='footer'/>
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
            {ICONS.map((icon) => (
              <a key={icon.src} className={style.socialLink} href='/'>
                <Image {...icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
