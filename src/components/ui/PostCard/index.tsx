import Image from 'next/image';
import { IPostCard } from '@customTypes/models';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

import style from './postCard.module.scss';


export default function PostCard({ imageSrc, tags, title, description, size = 'default', id }: IPostCard) {
  return (
    <Link className={style.linkWrapper} href={`${ROUTES.blog}/${id}`}>
      <article
        className={`${size === 'small' ? style.postCardArticleSmall : ''} ${style.postCardArticleDefault}`}
      >
        <div className={`${size === 'small' ? style.imageWrapperSmall : ''} ${style.imageWrapper}`}>
          <Image src={imageSrc} alt='post image' fill sizes='100vw' style={{ objectFit: 'cover' }} />
        </div>
        <div className={style.infoWrapper}>
          <p className={style.tags}>{tags.join(' ')}</p>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
        </div>
      </article>
    </Link>
  );
}
