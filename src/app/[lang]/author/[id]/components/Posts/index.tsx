import PostCard from '@components/ui/PostCard';
import { POST_CARDS } from '@constants/cards';
import style from '@styles/authorPage/posts.module.scss';

export default function Posts() {
  return (
    <section className={style.postsSection}>
      <div className={style.content}>
        <h1 className={style.title}>My Posts</h1>
        <div className={style.postsWrapper}>
          {POST_CARDS.slice(0, 2).map((card) => (
            <PostCard key={card.id} {...card} size='medium' />
          ))}
        </div>
      </div>
    </section>
  );
}
