import { POST_CARDS } from '@constants/cards';

import style from './posts.module.scss';

import PostCard from '../PostCard';

export default function Posts({ category }: { category: string }) {
  return (
    <section className={style.postsSection}>
      <h2 className={style.title}>What to read next</h2>
      <div className={style.wrapperPosts}>
        {POST_CARDS.filter((card) => card.category === category).map((card) => (
          <PostCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
