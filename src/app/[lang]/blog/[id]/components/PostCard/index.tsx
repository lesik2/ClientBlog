
import style from '@styles/blogPost/postCard.module.scss';
import Image from 'next/image';

export interface IBlogPostCard {
  imageSrc: string;
  author: string;
  date: string;
  title: string;
  description: string;
}

export default function PostCard({imageSrc,author,date,title,description}: IBlogPostCard) {
  return (
    <article className={style.postCardSection}>
      <Image  src={imageSrc} alt='post' width={405} height={318} />
      <p  className={style.dateAuthor}>By <span className={style.mark}>{author}</span> | {date}</p>
      <h3  className={style.title}>{title}</h3>
      <p  className={style.description}>{description}</p>
    </article>
  )
}
