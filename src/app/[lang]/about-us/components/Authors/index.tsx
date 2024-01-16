import style from '@styles/aboutUsPage/authors.module.scss';
import {AUTHORS_CARDS} from '@constants/authors';
import { AuthorCard } from '@components/ui/AuthorCard';

export default function Authors() {
  return (
    <section className={style.authorsSection}>
      <h2 >List of Authors</h2>
      <div className={style.wrapper}>
        {AUTHORS_CARDS.map((card)=>(
          <AuthorCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}
