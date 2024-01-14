import style from '@styles/home/authorList.module.scss';
import { Dictionary } from '@lib/dictionary';

import { AUTHORS_CARDS } from './constants';

import { AuthorCard } from '../ui/AuthorCard';

export default function AuthorsList({ dictionary }: { dictionary: Dictionary }) {
  const { authorList } = dictionary;

  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{authorList.title}</h2>
        <div className={style.wrapperAuthors}>
          {AUTHORS_CARDS.map((author) => (
            <AuthorCard key={author.title} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
}
