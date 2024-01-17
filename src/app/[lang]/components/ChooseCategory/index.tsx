import style from '@styles/homePage/chooseCategory.module.scss';
import { Dictionary } from '@lib/dictionary';
import CategoryCard from '@components/ui/CategoryCard';
import { CATEGORIES } from '@constants/categories';

export default function ChooseCategory({ dictionary }: { dictionary: Dictionary }) {
  const { chooseCategory } = dictionary;

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{chooseCategory.title}</h2>
        <div className={style.wrapperCards}>
          {CATEGORIES.map((card) => (
            <CategoryCard key={card.category} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
