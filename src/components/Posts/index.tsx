import style from '@styles/home/featuredPosts.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import button from '@styles/ui/button.module.scss';
import Image from 'next/image';

import { Post } from './components/Post';
import { CONSTANTS, PostsData } from './constants';

export function Posts() {
  return (
    <section className={style.sectionPosts}>
      <div className={style.content}>
        <div className={style.postsWrapper}>
          <div className={style.featuredPostsWrapper}>
            <div className={style.header}>
              <h2 className={style.title}>{CONSTANTS.featuredTitle}</h2>
            </div>
            <div className={style.featuredPost}>
              <Image src='/images/postsImage.png' alt='post' width={669} height={352} />
              <p className={style.info}>
                By
                <span className={style.infoMark}>{CONSTANTS.author}</span> | {CONSTANTS.date}
              </p>
              <h3 className={style.subtitle}>{CONSTANTS.subtitle}</h3>
              <p className={style.description}>{CONSTANTS.description}</p>
              <Link href={ROUTES.blogPost} className={style.link}>
                <button type='button' className={button.primary}>
                  {CONSTANTS.btn}
                </button>
              </Link>
            </div>
          </div>
          <div className={style.allPosts}>
            <div className={style.header}>
              <h2 className={style.title}>{CONSTANTS.allPostsTitle}</h2>
              <Link href={ROUTES.blog} className={style.link}>
                {CONSTANTS.link}
              </Link>
            </div>
            {PostsData.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
