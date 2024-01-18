'use client';

import { ChangeEvent, useState } from 'react';
import style from '@styles/categoryPage/elasticSearch.module.scss';
import { TAGS } from '@constants/tags';

import { IElasticSearch } from '@/types';

export default function ElasticSearch({ setSearch }: IElasticSearch) {
  const [value, setValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchTag = (searchTag: string) => {
    setSearch(searchTag);
    setValue(searchTag);
  };

  return (
    <div className={style.elasticSearchWrapper}>
      <div className={style.wrapperInput}>
        <input value={value} onChange={handleInput} className={style.input} placeholder='Search for tag...' />
        <button className={style.searchBtn} type='button' onClick={() => handleSearchTag(value)}>
          Search
        </button>
      </div>
      {value && !TAGS.includes(value) && (
        <ul className={style.list}>
          {TAGS.filter((tag) => tag.toLowerCase().startsWith(value.toLowerCase())).map((tag) => (
            <li className={style.item} key={tag} onClick={() => handleSearchTag(tag)}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
