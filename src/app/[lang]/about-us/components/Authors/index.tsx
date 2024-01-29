import { AUTHORS } from '@constants/authors';
import { AuthorCard } from '@components/ui/AuthorCard';

import style from './authors.module.scss';

import { IStaticRoute } from '@/types/staticRoute';

export default function Authors({ dictionary, lang }: IStaticRoute) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.authorsSection}>
      <h2 className={style.title}>{aboutUsPage.authorTitle}</h2>
      <div className={style.wrapper}>
        {AUTHORS.map((author) => (
          <AuthorCard key={author.id} {...author} lang={lang} />
        ))}
      </div>
    </section>
  );
}
