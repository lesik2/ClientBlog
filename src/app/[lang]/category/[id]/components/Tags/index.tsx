import style from '@styles/categoryPage/tags.module.scss';
import { TAGS } from '@constants/tags';
import { Dispatch, SetStateAction } from 'react';

export interface ITags {
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
}
export default function Tags({ setTags, tags }: ITags) {
  const handleClick = (tag: string) => {
    const isExist = tags.includes(tag);
    if (isExist) {
      setTags(tags.filter((item) => item !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return (
    <div className={style.tagsWrapper}>
      <h2 className={style.title}>All Tags</h2>
      <div className={style.wrapper}>
        {TAGS.map((tag) => (
          <button
            className={`${tags.includes(tag) ? style.active : ''} ${style.tag}`}
            type='button'
            key={tag}
            onClick={() => handleClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
