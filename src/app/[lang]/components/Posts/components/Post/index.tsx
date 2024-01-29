import { memo } from 'react';

import style from './post.module.scss';

export interface IPost {
  title: string;
  author: string;
  date: string;
}

export const Post = memo(({ title, author, date }: IPost) => (
  <div className={style.postWrapper}>
    <div className={style.content}>
      <p className={style.info}>
        By <span className={style.infoMark}>{author}</span> | {date}
      </p>
      <h4 className={style.title}>{title}</h4>
    </div>
  </div>
));
