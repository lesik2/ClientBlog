import { CATEGORIES } from '@constants/categories';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

import style from './categories.module.scss';

import { ICategories } from '../../interfaces';

import { ROUTES } from '@/constants/routes';
import { URL_CATEGORY } from '@/constants/regular';

export default function Categories({ activeCategory }: ICategories) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (category: string) => {
    const currentPathname = pathname;

    const newCategoryPathname = currentPathname.replace(URL_CATEGORY, `${ROUTES.category}/${category}`);

    router.replace(newCategoryPathname);
  };

  return (
    <div className={style.categoriesWrapper}>
      <h2 className={style.title}>Categories</h2>
      <div className={style.wrapper}>
        {CATEGORIES.map((card) => (
          <button
            type='button'
            key={card.category}
            className={`${activeCategory === card.category ? style.active : ''} ${style.card}`}
            onClick={() => handleClick(card.category)}
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
}
