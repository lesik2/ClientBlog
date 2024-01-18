import PostCard from '@components/ui/PostCard';
import style from '@styles/authorPage/posts.module.scss';

import { IPostCard } from '@/types/models';
import { Dictionary } from '@/lib/dictionary';

export default function Posts({ posts, dictionary }: { posts: IPostCard[]; dictionary: Dictionary }) {
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
}
