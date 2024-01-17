import Image from 'next/image';
import style from '@styles/blogPage/header.module.scss';
import buttonStyle from '@styles/ui/button.module.scss';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.infoWrapper}>
        <p className={style.subtitle}>Featured Post</p>
        <h2 className={style.title}>Step-by-step guide to choosing great font pairs</h2>
        <p className={style.authorInfo}>
          By <span className={style.markAuthor}>John Doe</span> | May 23, 2022{' '}
        </p>
        <p className={style.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Link href={ROUTES.blogPost}>
          <button type='button' className={buttonStyle.primary}>
            Read More {'>'}
          </button>
        </Link>
      </div>
      <Image src='/images/BlogHeader.png' alt='step by step image' width={515} height={359} />
    </header>
  );
}
