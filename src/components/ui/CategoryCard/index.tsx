import { ICategoryCard } from '@customTypes/models';
import style from '@styles/ui/categoryCard.module.scss';
import Image from 'next/image';


export default function CategoryCard({ iconSrc, category, description }: ICategoryCard) {
  return (
    <div className={style.cardWrapper}>
      <div className={style.iconWrapper}>
        <Image width={48} height={48} src={iconSrc} alt={category} />
      </div>
      <h3 className={style.title}>{category}</h3>
      <p className={style.description}>{description}</p>
    </div>
  );
}
