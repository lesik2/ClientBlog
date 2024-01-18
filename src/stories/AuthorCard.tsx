'use client';

import style from '@styles/ui/authorCard.module.scss';
import Image from 'next/image';
import { SOCIAL_ICONS } from '@constants/socialIcons';
import { IAuthor } from '@customTypes/models';

export function AuthorCard({ fullName, description, iconSrc, id }: IAuthor) {

  return (
    <button id={id} type='button' className={style.wrapperCard}>
      <div className={style.content}>
        <Image className={style.icon} width={128} height={128} src={iconSrc} alt={`icon of ${fullName}`} />
        <h3 className={style.title}>{fullName}</h3>
        <p className={style.description}>{description}</p>
        <div className={style.wrapperSocialLinks}>
          {SOCIAL_ICONS.map((icon) => (
            <a key={icon.src} className={`${style.socialLink}`} href='/'>
              <Image {...icon} />
            </a>
          ))}
        </div>
      </div>
    </button>
  );
}
