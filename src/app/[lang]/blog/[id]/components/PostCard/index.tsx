import { IPostCard } from '@customTypes/models';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

import style from './postCard.module.scss';

export default function PostCard({ imageSrc, title, description, id }: IPostCard) {
  return (
    <Link className={style.linkWrapper} href={`${ROUTES.blog}/${id}`}>
      <article className={style.postCardSection}>
        <div className={style.imageWrapper}>
          <Image src={imageSrc} alt='post' style={{ objectFit: 'cover' }} fill sizes='100vw' />
        </div>

        <p className={style.dateAuthor}>
          By <span className={style.mark}>John Doe</span> | Aug 23, 2021
        </p>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </article>
    </Link>
  );
}
