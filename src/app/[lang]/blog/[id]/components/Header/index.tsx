import { IHeaderBlogPost } from '@customTypes/index';
import style from '@styles/blogPost/header.module.scss';
import Image from 'next/image';
import { CATEGORIES } from '@constants/categories';

export default function Header({ author, post }: IHeaderBlogPost) {
  const { fullName, iconSrc } = author;
  const { date, title, category } = post;

  return (
    <header className={style.headerSection}>
      <div className={style.userWrapper}>
        <Image src={iconSrc} alt='user icon' width={48} height={48} />
        <div className={style.userInfo}>
          <h3 className={style.userTitle}>{fullName}</h3>
          <p className={style.userSubtitle}>Posted on {date}</p>
        </div>
      </div>
      <h1 className={style.title}>{title}</h1>
      <div className={style.categories}>
        <div className={style.categoryWrapper}>
          <Image
            src={CATEGORIES.find((item) => item.category === category)?.iconSrc ?? ''}
            alt='category'
            width={48}
            height={48}
          />
          <h4 className={style.categoryTitle}>{category}</h4>
        </div>
      </div>
    </header>
  );
}
