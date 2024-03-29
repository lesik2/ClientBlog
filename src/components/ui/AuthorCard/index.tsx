'use client';

import Image from 'next/image';
import { SOCIAL_ICONS } from '@constants/socialIcons';
import { IAuthor } from '@customTypes/models';
import { ROUTES } from '@constants/routes';
import { useRouter } from 'next/navigation';
import { memo } from 'react';

import style from './authorCard.module.scss';

export const AuthorCard = memo(({ fullName, description, iconSrc, id, lang }: IAuthor) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${lang}${ROUTES.author}/${id}`);
  };

  return (
    <button data-cy={fullName} type='button' className={style.wrapperCard} onClick={handleClick}>
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
});
