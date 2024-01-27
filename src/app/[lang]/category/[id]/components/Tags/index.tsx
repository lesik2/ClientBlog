import { TAGS } from '@constants/tags';
import _ from 'lodash';
import { memo } from 'react';

import style from './tags.module.scss';

import { ITags } from '../../interfaces';

const Tags = memo(({ setTags, tags }: ITags) => {
  
  const handleClick = (tag: string) => () => {
    const exists = tags.includes(tag);

    setTags(exists ? tags.filter((item) => item !== tag) : [...tags, tag]);
  };

  return (
    <div className={style.tagsWrapper}>
      <h2 className={style.title}>All Tags</h2>
      <div data-cy='tagsWrapper' className={style.wrapper}>
        {TAGS.map((tag) => (
          <button
            data-cy={`card-${tag}`}
            className={`${tags.includes(tag) ? style.active : ''} ${style.tag}`}
            type='button'
            key={tag}
            onClick={handleClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}, _.isEqual);

export default Tags;
