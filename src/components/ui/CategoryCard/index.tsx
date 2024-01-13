import style from '@styles/ui/categoryCard.module.scss';
import Image from 'next/image';

export interface ICategoryCard{
  iconSrc: string;
  title: string;
  description: string;
}
export default function CategoryCard({iconSrc, title, description}: ICategoryCard) {
  return (
    <div className={style.cardWrapper}>
      <div className={style.iconWrapper}>
        <Image width={48} height={48} src={iconSrc} alt={title} />
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
}
