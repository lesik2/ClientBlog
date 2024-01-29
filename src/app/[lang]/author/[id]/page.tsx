import { AUTHORS } from '@constants/authors';
import { POST_CARDS } from '@constants/cards';
import { Dictionary, getDictionary } from '@lib/dictionary';

import style from './author.module.scss';
import Header from './components/Header';
import Posts from './components/Posts';

import { IDynamicRoute } from '@/types/dynamicRoute';

export function generateStaticParams() {
  return AUTHORS.map((author) => ({
    id: author.id,
  }));
}

export default async function AuthorPage({ params: { lang, id } }: IDynamicRoute) {
  const dictionary: Dictionary = await getDictionary(lang);

  const author = AUTHORS.find((item) => item.id === id);
  const authorCards = POST_CARDS.filter((card) => card.authorId === id);

  return (
    <>
      {author ? (
        <section className={style.sectionAuthor}>
          <Header author={author} dictionary={dictionary} />
          <Posts posts={authorCards} dictionary={dictionary} lang={lang} />
        </section>
      ) : (
        <h1>Not Found</h1>
      )}
    </>
  );
}
