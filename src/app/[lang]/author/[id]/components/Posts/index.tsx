import PostCard from '@components/ui/PostCard';
import style from '@styles/authorPage/posts.module.scss';

import { IPostCard } from '@/types/models';

export default function Posts({posts}: {posts: IPostCard[]}) {
  return (
    <section className={style.postsSection}>
      <div className={style.content}>
        <h1 className={style.title}>My Posts</h1>
        <div className={style.postsWrapper}>
          {posts.length>0? posts.map((card) => (
            <PostCard key={card.id} {...card} size='medium' />
          )):
          <h2 className={style.noContent}>This author has no posts yet</h2>
          }
        </div>
      </div>
    </section>
  );
}
