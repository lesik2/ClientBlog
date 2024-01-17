import style from '@styles/blogPage/categories.module.scss';
import CategoryCard from '@components/ui/CategoryCard';
import { CATEGORIES } from '@constants/categories';

export default function Categories() {
  return (
    <section className={style.categoriesSection}>
      <h2 className={style.title}>All Categories</h2>
      <div className={style.wrapperCategories}>
        {CATEGORIES.map((card) => (
          <CategoryCard key={card.category} {...card} />
        ))}
      </div>
    </section>
  );
}
