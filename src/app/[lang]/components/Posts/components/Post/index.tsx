import { IPost } from '@customTypes/index';
import style from '@styles/homePage/post.module.scss';

export function Post({ title, author, date }: IPost) {
  return (
    <div className={style.postWrapper}>
      <div className={style.content}>
        <p className={style.info}>
          By <span className={style.infoMark}>{author}</span> | {date}
        </p>
        <h4 className={style.title}>{title}</h4>
      </div>
    </div>
  );
}
