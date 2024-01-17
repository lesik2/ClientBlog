import Image from 'next/image';
import style from '@styles/ui/postCard.module.scss';

export interface IPostCard {
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  size?: 'default'|'medium'|'small';
}
export default function PostCard({ imageSrc, tags, title, description, size='default' }: IPostCard) {

  const width = size === 'default'? 490: 412;

  return (
    <article className={`${size==='medium'? style.postCardArticleMedium: ''} ${style.postCardArticleDefault}`}>
      <Image className={style.image} src={imageSrc} alt='post image' width={width} height={318} />
      <div className={style.infoWrapper}>
        <p className={style.tags}>{tags.join(' ')}</p>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
      </div>
    </article>
  );
}
