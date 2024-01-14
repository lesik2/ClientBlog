import style from '@styles/ui/footer.module.scss';
import button from '@styles/ui/button.module.scss';
import Image from 'next/image';
import { ICONS } from '@constants/index';

import { CONSTANTS } from './constants';

import { Navigation } from '../Navigation';

import { getDictionary } from '@/lib/dictionary';
import { LocaleType } from '@/types/locale';

export default async function Footer({ lang }: LocaleType) {
  const { navigation, footer } = await getDictionary(lang);
  const nameOfLinks = Object.values(navigation);

  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.header}>
          <p className={style.title}>{CONSTANTS.title}</p>
          <Navigation type='footer' nameOfLinks={nameOfLinks} />
        </div>

        <div className={style.submitWrapper}>
          <h2 className={style.subtitle}>{footer.text}</h2>
          <div className={style.submitForm}>
            <input placeholder={footer.placeholder as string} className={style.input} />
            <button className={button.primary} type='submit'>
              {footer.btn}
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
