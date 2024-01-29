import Image from 'next/image';
import { IPostCard } from '@customTypes/models';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { memo } from 'react';

import style from './postCard.module.scss';

const PostCard = memo(({ imageSrc, tags, title, description, size = 'default', id, lang }: IPostCard) => (
  <Link data-cy='postCard' className={style.linkWrapper} href={`/${lang}${ROUTES.blog}/${id}`}>
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
));

export default PostCard;
