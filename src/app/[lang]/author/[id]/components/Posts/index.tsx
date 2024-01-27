import PostCard from '@components/ui/PostCard';
import _ from 'lodash';
import { memo } from 'react';

import style from './posts.module.scss';

import { IPostCard } from '@/types/models';
import { Dictionary } from '@/lib/dictionary';

const Posts = memo(({ posts, dictionary }: { posts: IPostCard[]; dictionary: Dictionary }) => {
  const { authorPage } = dictionary;

  return (
    <section className={style.postsSection}>
      <div className={style.content}>
        <h1 className={style.title}>{authorPage.postTitle}</h1>
        <div className={style.postsWrapper}>
          {posts.length > 0 ? (
            posts.map((card) => <PostCard key={card.id} {...card} size='default' />)
          ) : (
            <h2 className={style.noContent}>This author has no posts yet</h2>
          )}
        </div>
      </div>
    </section>
  );
}, _.isEqual);

export default Posts;
