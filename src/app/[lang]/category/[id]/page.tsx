'use client';

import { POST_CARDS } from '@constants/cards';
import PostCard from '@components/ui/PostCard';
import { useMemo, useState } from 'react';

import style from './category.module.scss';
import Header from './components/Header';
import ElasticSearch from './components/ElasticSearch';
import Categories from './components/Categories';
import Tags from './components/Tags';

import { IDynamicRoute } from '@/types/dynamicRoute';

export default function CategoryItem({ params: { id, lang } }: IDynamicRoute) {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const cards = useMemo(
    () =>
      POST_CARDS.filter((card) => card.category === id)
        .filter((card) => (search !== '' ? card.tags.includes(search) : true))
        .filter((card) => tags.every((tag) => card.tags.includes(tag))),
    [search, tags, id],
  );

  return (
    <section className={style.categorySection}>
      <Header category={id} />
      <main className={style.main}>
        <section className={style.postsSection}>
          {cards.length > 0 ? (
            cards.map((card) => <PostCard size='small' key={card.id} {...card} lang={lang}/>)
          ) : (
            <h2 className={style.title}>No posts found</h2>
          )}
        </section>
        <aside className={style.aside}>
          <ElasticSearch setSearch={setSearch} />
          <Categories activeCategory={id} lang={lang}/>
          <Tags tags={tags} setTags={setTags} />
        </aside>
      </main>
    </section>
  );
}
