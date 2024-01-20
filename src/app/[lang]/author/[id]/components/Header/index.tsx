'use client';

import Image from 'next/image';
import style from '@styles/authorPage/header.module.scss';
import { SOCIAL_ICONS } from '@constants/socialIcons';
import { IAuthor } from '@customTypes/models';

import { Dictionary } from '@/lib/dictionary';

export default function Header({ author, dictionary }: { author: IAuthor; dictionary: Dictionary }) {
  const { authorPage } = dictionary;

  return (
    <header className={style.header}>
      <Image className={style.userIcon} src={author.iconSrc} alt='author image' width={260} height={260} />
      <div className={style.infoWrapper}>
        <h1
          className={style.title}
        >{`${authorPage.startTitle} ${author.fullName} ${authorPage.endTitle}`}</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
        <div className={style.wrapperSocialLinks}>
          {SOCIAL_ICONS.map((icon) => (
            <a key={icon.src} className={style.socialLink} href='/'>
              <Image {...icon} />
            </a>
          ))}
        </div>
      </div>
      <div className={style.designWrapper}>
        <div className={style.first} />
        <div className={style.second} />
      </div>
    </header>
  );
}
