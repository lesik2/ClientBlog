import style from '@styles/authorPage/author.module.scss';

import Header from './components/Header';

export default function AuthorPage() {
  return (
    <section className={style.sectionAuthor}>
      <Header />
    </section>
  );
}
