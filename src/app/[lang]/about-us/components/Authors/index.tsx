import { AUTHORS } from '@constants/authors';
import { AuthorCard } from '@components/ui/AuthorCard';
import { Dictionary } from '@lib/dictionary';

import style from './authors.module.scss';

export default function Authors({ dictionary }: { dictionary: Dictionary }) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.authorsSection}>
      <h2 className={style.title}>{aboutUsPage.authorTitle}</h2>
      <div className={style.wrapper}>
        {AUTHORS.map((author) => (
          <AuthorCard key={author.id} {...author} />
        ))}
      </div>
    </section>
  );
}
