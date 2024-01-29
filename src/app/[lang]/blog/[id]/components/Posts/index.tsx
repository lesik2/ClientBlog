import { POST_CARDS } from '@constants/cards';
import { memo } from 'react';

import style from './posts.module.scss';

import PostCard from '../PostCard';

const Posts = memo(({ category }: { category: string }) => (
  <section className={style.postsSection}>
    <h2 className={style.title}>What to read next</h2>
    <div className={style.wrapperPosts}>
      {POST_CARDS.filter((card) => card.category === category).map((card) => (
        <PostCard key={card.id} {...card} />
      ))}
    </div>
  </section>
));

export default Posts;
