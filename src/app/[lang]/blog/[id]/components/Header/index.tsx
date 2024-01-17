import style from '@styles/blogPost/header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={style.headerSection}>
      <div className={style.userWrapper}>
        <Image src='/images/blogPostIcon.png' alt='user icon' width={48} height={48} />
        <div className={style.userInfo}>
          <h3 className={style.userTitle}>Andrew Jonson</h3>
          <p className={style.userSubtitle}>Posted on 27th January 2022</p>
        </div>
      </div>
      <h1 className={style.title}>Step-by-step guide to choosing great font pairs</h1>
      <div className={style.categoryWrapper}>
        <Image src='/icons/startupCard.svg' alt='category' width={48} height={48} />
        <h4 className={style.categoryTitle}>Startup</h4>
      </div>
    </header>
  );
}
