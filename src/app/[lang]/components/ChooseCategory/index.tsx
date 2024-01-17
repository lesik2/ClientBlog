import style from '@styles/home/chooseCategory.module.scss';
import { Dictionary } from '@lib/dictionary';
import CategoryCard from '@components/ui/CategoryCard';

import { CARDS } from './constants';


export default function ChooseCategory({ dictionary }: { dictionary: Dictionary }) {
  const { chooseCategory } = dictionary;

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{chooseCategory.title}</h2>
        <div className={style.wrapperCards}>
          {CARDS.map((card) => (
            <CategoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
