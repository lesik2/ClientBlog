import { Dictionary } from '@lib/dictionary';
import { AuthorCard } from '@components/ui/AuthorCard';
import { AUTHORS } from '@constants/authors';

import style from './authorList.module.scss';

export default function AuthorsList({ dictionary }: { dictionary: Dictionary }) {
  const { authorList } = dictionary;
  const cards = AUTHORS.slice(0, 4);

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{authorList.title}</h2>
        <div className={style.wrapperAuthors}>
          {cards.map((author) => (
            <AuthorCard key={author.id} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
}
