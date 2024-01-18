'use client';

import style from '@styles/categoryPage/category.module.scss';
import { POST_CARDS } from '@constants/cards';
import PostCard from '@components/ui/PostCard';
import { useState } from 'react';

import Header from "./components/Header";
import ElasticSearch from './components/ElasticSearch';
import Categories from './components/Categories';
import Tags from './components/Tags';


export default function CategoryItem({params: {id}}: {params: {id: string}}) {

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  

  const cards = POST_CARDS
  .filter((card)=>card.category === id)
  .filter((card)=>{
    if(search !== ''){
      return card.tags.includes(search)
    }
    
    return true;
  })
  .filter((card)=>tags.every((tag)=>card.tags.includes(tag)))

  return (
    <section className={style.categorySection}>
      <Header category={id}/>
      <main className={style.main}>
      <section className={style.postsSection}>
        {cards.map((card)=>(
          <PostCard size='small' key={card.id} {...card} />
        ))}
      </section>
      <aside className={style.aside}>
        <ElasticSearch setSearch={setSearch}/>
        <Categories activeCategory={id} />
        <Tags tags={tags} setTags={setTags}/>
      </aside>
      </main>
    </section>
  )
}
