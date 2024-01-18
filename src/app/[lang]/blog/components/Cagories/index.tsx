import style from '@styles/blogPage/categories.module.scss';
import CategoryCard from '@components/ui/CategoryCard';
import { CATEGORIES } from '@constants/categories';

import { Dictionary } from '@/lib/dictionary';

export default function Categories({ dictionary }: { dictionary: Dictionary }) {
  const { blogPage } = dictionary;

  return (
    <section className={style.categoriesSection}>
      <h2 className={style.title}>{blogPage.categoryTitle}</h2>
      <div className={style.wrapperCategories}>
        {CATEGORIES.map((card) => (
          <CategoryCard key={card.category} {...card} />
        ))}
      </div>
    </section>
  );
}
