import style from '@styles/home/chooseCategory.module.scss';

import { CARDS } from './constants';

import CategoryCard from '../ui/CategoryCard';

export function ChooseCategory() {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>
          Choose A Catagory
        </h2>
        <div className={style.wrapperCards}>
          {CARDS.map((card)=>(
            <CategoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
