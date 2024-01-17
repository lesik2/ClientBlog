import style from '@styles/blogPost/posts.module.scss';
import { POST_CARDS } from '@constants/cards';

import PostCard from '../PostCard';

export default function Posts() {
  return (
    <section className={style.postsSection}>
      <h2 className={style.title}>What to read next</h2>
      <div className={style.wrapperPosts}>
        {POST_CARDS.slice(0, 3).map((card) => (
          <PostCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.title}
            author='John Doe'
            date='Aug 23, 2021'
            description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
          />
        ))}
      </div>
    </section>
  );
}
