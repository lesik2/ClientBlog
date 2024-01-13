import style from '@styles/home/authorList.module.scss';

import { AUTHORS_CARDS } from './constants';

import { AuthorCard } from '../ui/AuthorCard';

export default function AuthorsList() {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>List of Authors</h2>
        <div className={style.wrapperAuthors}>
          {AUTHORS_CARDS.map((author) => (
            <AuthorCard key={author.title} {...author} />
          ))}
        </div>
      </div>
    </section>
  );
}
