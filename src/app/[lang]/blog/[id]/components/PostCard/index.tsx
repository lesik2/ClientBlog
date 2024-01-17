import { IPostCard } from '@customTypes/models';
import style from '@styles/blogPost/postCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

export default function PostCard({ imageSrc, title, description, id }: IPostCard) {
  return (
    <Link href={`${ROUTES.blog}/${id}`}>
      <article className={style.postCardSection}>
        <Image src={imageSrc} alt='post' width={405} height={318} />
        <p className={style.dateAuthor}>
          By <span className={style.mark}>John Doe</span> | Aug 23, 2021
        </p>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </article>
    </Link>
  );
}
