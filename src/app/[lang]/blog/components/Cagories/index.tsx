import CategoryCard from '@components/ui/CategoryCard';
import { CATEGORIES } from '@constants/categories';
import { IStaticRoute } from '@customTypes/staticRoute';

import style from './categories.module.scss';


export default function Categories({ dictionary, lang }: IStaticRoute) {
  const { blogPage } = dictionary;

  return (
    <section className={style.categoriesSection}>
      <h2 className={style.title}>{blogPage.categoryTitle}</h2>
      <div className={style.wrapperCategories}>
        {CATEGORIES.map((card) => (
          <CategoryCard key={card.category} {...card} lang={lang} />
        ))}
      </div>
    </section>
  );
}
