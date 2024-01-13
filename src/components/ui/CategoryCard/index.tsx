import style from '@styles/ui/categoryCard.module.scss';
import Image from 'next/image';

export default function CategoryCard() {
  return (
    <div className={style.cardWrapper}>
      <div className={style.iconWrapper}>
        <Image width={48} height={48} src='/icons/card.svg' alt='icon' />
      </div>
      <h3 className={style.title}>Business</h3>
      <p className={style.description}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
    </div>
  );
}
