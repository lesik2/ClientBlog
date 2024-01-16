import style from '@styles/aboutUsPage/authors.module.scss';
import { AUTHORS_CARDS } from '@constants/authors';
import { AuthorCard } from '@components/ui/AuthorCard';
import { Dictionary } from '@lib/dictionary';

export default function Authors({ dictionary }: { dictionary: Dictionary }) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.authorsSection}>
      <h2 className={style.title}>{aboutUsPage.authorTitle}</h2>
      <div className={style.wrapper}>
        {AUTHORS_CARDS.map((card) => (
          <AuthorCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
