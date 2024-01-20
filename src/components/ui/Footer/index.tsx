import style from '@styles/ui/footer.module.scss';
import Image from 'next/image';
import { LocaleType } from '@customTypes/locale';

import { CONSTANTS } from './constants';
import SubscribeForm from './components/SubscribeForm';

import { Navigation } from '../Navigation';

import { SOCIAL_ICONS } from '@/constants/socialIcons';
import { getDictionary } from '@/lib/dictionary';

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
          <SubscribeForm placeholder={footer.placeholder} btnText={footer.btn} />
        </div>
        <div className={style.contactsWrapper}>
          <div className={style.contactsInfo}>
            <p className={style.contact}>{CONSTANTS.address}</p>
            <p className={style.contact}>{CONSTANTS.email}</p>
          </div>
          <div className={style.socialWrapper}>
            {SOCIAL_ICONS.map((icon) => (
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
