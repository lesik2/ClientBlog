'use client';

import { ChangeEvent, memo, useState } from 'react';
import style from '@styles/ui/elasticSearch.module.scss';
import { TAGS } from '@constants/tags';
import { Tags } from '@customTypes/models';

import { IElasticSearch } from '../../interfaces';

const ElasticSearch = memo(({ setSearch }: IElasticSearch) => {
  const [value, setValue] = useState('');

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSearchTag = (searchTag: string) => {
    setSearch(searchTag);
    setValue(searchTag);
  };

  return (
    <div data-cy='elasticSearch' className={style.elasticSearchWrapper}>
      <div className={style.wrapperInput}>
        <input
          data-cy='searchInput'
          value={value}
          onChange={handleInput}
          className={style.input}
          placeholder='Search for tag...'
        />
        <button
          data-cy='searchButton'
          className={style.searchBtn}
          type='button'
          onClick={() => handleSearchTag(value)}
        >
          Search
        </button>
      </div>
      {value && !TAGS.includes(value as Tags) && (
        <ul data-cy='searchList' className={style.list}>
          {TAGS.filter((tag) => tag.toLowerCase().startsWith(value.toLowerCase())).map((tag) => (
            <li className={style.item} key={tag} onClick={() => handleSearchTag(tag)}>
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

export default ElasticSearch;
