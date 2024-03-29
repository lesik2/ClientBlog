import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import button from '@styles/ui/button.module.scss';
import Image from 'next/image';
import { IStaticRoute } from '@customTypes/staticRoute';

import style from './featuredPosts.module.scss';
import { Post } from './components/Post';
import { CONSTANTS, PostsData } from './constants';

export default function Posts({ dictionary, lang }: IStaticRoute) {
  const { posts } = dictionary;

  return (
    <div className={style.sectionPosts}>
      <div className={style.content}>
        <div className={style.postsWrapper}>
          <div className={style.featuredPostsWrapper}>
            <div className={style.header}>
              <h2 className={style.title}>{posts.featuredTitle}</h2>
            </div>
            <div className={style.featuredPost}>
              <Image
                className={style.postImage}
                src='/images/postsImage.png'
                alt='post'
                width={669}
                height={352}
                sizes='100vw'
              />
              <p className={style.info}>
                {posts.StartFrom}
                <span className={style.infoMark}>{CONSTANTS.author}</span> | {posts.date}
              </p>
              <h3 className={style.subtitle}>{CONSTANTS.subtitle}</h3>
              <p className={style.description}>{CONSTANTS.description}</p>
              <Link href={`${lang}${ROUTES.blog}/1`} className={style.link}>
                <button type='button' className={button.primary}>
                  {posts.btn}
                </button>
              </Link>
            </div>
          </div>
          <div className={style.allPosts}>
            <div className={style.header}>
              <h2 className={style.title}>{posts.allPostsTitle}</h2>
              <Link data-cy='all-posts-link' href={ROUTES.blog} className={style.link}>
                {posts.link}
              </Link>
            </div>
            {PostsData.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
