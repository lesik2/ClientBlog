import CategoryCard from '@components/ui/CategoryCard';
import { CATEGORIES } from '@constants/categories';
import { IStaticRoute } from '@customTypes/staticRoute';

import style from './chooseCategory.module.scss';

export default function ChooseCategory({ dictionary, lang }: IStaticRoute) {
  const { chooseCategory } = dictionary;

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{chooseCategory.title}</h2>
        <div className={style.wrapperCards}>
          {CATEGORIES.map((card) => (
            <CategoryCard key={card.category} {...card} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
