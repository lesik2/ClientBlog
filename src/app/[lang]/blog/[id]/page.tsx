import JoinOurTeam from '@components/JoinOurTeam';
import { Dictionary, getDictionary } from '@lib/dictionary';
import { POST_CARDS } from '@constants/cards';
import { AUTHORS } from '@constants/authors';

import style from './blogPost.module.scss';
import Header from './components/Header';
import Main from './components/Main';
import Posts from './components/Posts';

import { IDynamicRoute } from '@/types/dynamicRoute';

export function generateStaticParams() {
  return POST_CARDS.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params: { lang, id } }: IDynamicRoute) {
  const dictionary: Dictionary = await getDictionary(lang);

  const currentPost = POST_CARDS.find((card) => card.id === id);

  const currentAuthor = AUTHORS.find((author) => author.id === currentPost?.authorId);

  return (
    <>
      {currentPost && currentAuthor && (
        <section className={style.blogPostSection}>
          <Header author={currentAuthor} post={currentPost} />
          <Main imageSrc={currentPost.imageSrc} />
          <Posts category={currentPost.category} />
          <JoinOurTeam dictionary={dictionary} lang={lang} />
        </section>
      )}
    </>
  );
}
