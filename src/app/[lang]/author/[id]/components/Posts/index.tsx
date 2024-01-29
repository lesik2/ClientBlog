import PostCard from '@components/ui/PostCard';
import isEqual from 'lodash.isequal';
import { memo } from 'react';

import style from './posts.module.scss';

import { IPostCard } from '@/types/models';
import { Dictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export interface IPostsAuthor {
  posts: IPostCard[];
  dictionary: Dictionary;
  lang: Locale;
}

const Posts = memo(({ posts, dictionary, lang }: IPostsAuthor) => {
  const { authorPage } = dictionary;

  return (
    <section className={style.postsSection}>
      <div className={style.content}>
        <h1 className={style.title}>{authorPage.postTitle}</h1>
        <div className={style.postsWrapper}>
          {posts.length > 0 ? (
            posts.map((card) => <PostCard key={card.id} {...card} size='default' lang={lang} />)
          ) : (
            <h2 className={style.noContent}>This author has no posts yet</h2>
          )}
        </div>
      </div>
    </section>
  );
}, isEqual);

export default Posts;
