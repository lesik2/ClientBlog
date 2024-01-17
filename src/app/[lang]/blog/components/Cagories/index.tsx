import style from '@styles/blog/categories.module.scss'
import CategoryCard from '@components/ui/CategoryCard'
import { CARDS } from '@components/ChooseCategory/constants'

export default function Categories() {
  return (
    <section className={style.categoriesSection}>
        <h2 className={style.title}>All Categories</h2>
        <div className={style.wrapperCategories}>
        {CARDS.map((card) => (
            <CategoryCard key={card.title} {...card} />
          ))}
        </div>
    </section>
  )
}
