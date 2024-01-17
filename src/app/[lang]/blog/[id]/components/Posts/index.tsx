import style from '@styles/blogPost/posts.module.scss';
import { POST_CARDS } from '@constants/cards';

import PostCard from '../PostCard';

export default function Posts({ tag }: { tag: string }) {
  return (
    <section className={style.postsSection}>
      <h2 className={style.title}>What to read next</h2>
      <div className={style.wrapperPosts}>
        {POST_CARDS.filter((card) => card.tags[0] === tag).map((card) => (
          <PostCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
