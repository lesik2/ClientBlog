import Image from 'next/image';
import style from '@styles/authorPage/header.module.scss';
import { ICONS } from '@constants/index';

export default function Header() {
  return (
    <header className={style.header}>
      <Image src='/images/authorHeader.png' alt='author image' width={251} height={294} />
      <div className={style.infoWrapper}>
        <h1 className={style.title}>Hey there, I’m Andrew Jonhson and welcome to my Blog</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </p>
        <div className={style.wrapperSocialLinks}>
          {ICONS.map((icon) => (
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
