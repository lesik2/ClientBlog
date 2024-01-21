import Image from 'next/image';
import style from '@styles/ui/postCard.module.scss';
import { IPostCard } from '@customTypes/models';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

export default function PostCard({ imageSrc, tags, title, description, size = 'default', id }: IPostCard) {
  return (
    <Link href={`${ROUTES.blog}/${id}`}>
      <article
        className={`${size === 'small' ? style.postCardArticleSmall : ''} ${style.postCardArticleDefault}`}
      >
        <Image
          className={style.image}
          src={imageSrc}
          alt='post image'
          width={400}
          height={0}
          style={{ objectFit: 'cover' }}
        />
        <div className={style.infoWrapper}>
          <p className={style.tags}>{tags.join(' ')}</p>
          <h2 className={style.title}>{title}</h2>
          <p className={style.description}>{description}</p>
        </div>
      </article>
    </Link>
  );
}
