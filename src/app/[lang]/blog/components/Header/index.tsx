import Image from 'next/image';
import style from '@styles/blogPage/header.module.scss';
import buttonStyle from '@styles/ui/button.module.scss';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { Dictionary } from '@/lib/dictionary';

export default function Header({ dictionary }: { dictionary: Dictionary }) {
  const { stepByStep } = dictionary;

  return (
    <header className={style.header}>
      <div className={style.infoWrapper}>
        <p className={style.subtitle}>{stepByStep.post}</p>
        <h2 className={style.title}>{stepByStep.title}</h2>
        <p className={style.authorInfo}>
          By <span className={style.markAuthor}>John Doe</span> | {stepByStep.date}
        </p>
        <p className={style.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Link href={`${ROUTES.blog}/1`}>
          <button type='button' className={buttonStyle.primary}>
            {stepByStep.btn}
          </button>
        </Link>
      </div>
      <Image src='/images/BlogHeader.png' alt='step by step image' width={515} height={359} />
    </header>
  );
}
