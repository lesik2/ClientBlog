import style from '@styles/authorPage/author.module.scss';

import Header from './components/Header';
import Posts from './components/Posts';

export default function AuthorPage() {
  return (
    <section className={style.sectionAuthor}>
      <Header />
      <Posts />
    </section>
  );
}
