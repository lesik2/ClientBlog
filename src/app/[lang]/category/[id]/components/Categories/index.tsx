import { CATEGORIES } from '@constants/categories';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { ROUTES } from '@constants/routes';
import { URL_CATEGORY } from '@constants/regular';
import { memo } from 'react';

import style from './categories.module.scss';

import { ICategories } from '../../interfaces';

const Categories = memo(({ activeCategory }: ICategories) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (category: string) => () => {
    const currentPathname = pathname;

    const newCategoryPathname = currentPathname.replace(
      URL_CATEGORY,
      `${ROUTES.category}/${category}`,
    );

    router.replace(newCategoryPathname);
  };

  return (
    <div className={style.categoriesWrapper}>
      <h2 className={style.title}>Categories</h2>
      <div data-cy='categoriesWrapper' className={style.wrapper}>
        {CATEGORIES.map((card) => (
          <button
            data-cy={card.category}
            type='button'
            key={card.category}
            className={`${activeCategory === card.category ? style.active : ''} ${style.card}`}
            onClick={handleClick(card.category)}
          >
            <div className={style.iconWrapper}>
              <Image width={48} height={48} src={card.iconSrc} alt={card.category} />
            </div>

            <h3 className={style.title}>{card.category}</h3>
          </button>
        ))}
      </div>
    </div>
  );
});

export default Categories;
