import style from '@styles/authorPage/author.module.scss';
import { AUTHORS } from '@constants/authors';
import { POST_CARDS } from '@constants/cards';

import Header from './components/Header';
import Posts from './components/Posts';

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = AUTHORS.find((item) => item.id === params.id);
  const authorCards = POST_CARDS.filter((card) => card.authorId === params.id);

  return (
    <>
      {author ? (
        <section className={style.sectionAuthor}>
          <Header author={author} />
          <Posts posts={authorCards} />
        </section>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}
