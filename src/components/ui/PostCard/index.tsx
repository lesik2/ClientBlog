import Image from 'next/image';
import style from '@styles/ui/postCard.module.scss';

export interface IPostCard {
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
}
export default function PostCard({ imageSrc, tags, title, description }: IPostCard) {
  return (
    <article className={style.postCardArticle}>
      <Image src={imageSrc} alt='post image' width={490} height={318} />
      <div className={style.infoWrapper}>
        <p className={style.tags}>{tags.join(' ')}</p>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
      </div>
    </article>
  );
}
