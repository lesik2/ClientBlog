import { ROUTES } from '@constants/routes';
import { ICategoryCard } from '@customTypes/models';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

import style from './categoryCard.module.scss';

const CategoryCard = memo(({ iconSrc, category, description }: ICategoryCard) => (
  <Link data-cy={category} href={`${ROUTES.category}/${category}`}>
    <div className={style.cardWrapper}>
      <div className={style.iconWrapper}>
        <Image width={48} height={48} src={iconSrc} alt={category} />
      </div>
      <h3 className={style.title}>{category}</h3>
      <p className={style.description}>{description}</p>
    </div>
  </Link>
));

export default CategoryCard;
