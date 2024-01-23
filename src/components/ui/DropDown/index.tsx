'use client';

import { useCallback, useState } from 'react';
import { useCloseList } from '@hooks/useCloseList';
import Image from 'next/image';
import { IDropDown } from '@customTypes/index';

import style from './dropDown.module.scss';

export function DropDown({ value, setValue, selectValues }: IDropDown) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleCloseList = useCallback(() => {
    setActive(false);
  }, []);

  const handleSelect = (select: string) => {
    setValue(select);
    handleCloseList();
  };

  const [wrapperRef, listRef] = useCloseList(handleCloseList);

  return (
    <div ref={wrapperRef} className={style.dropDownWrapper}>
      <button type='button' onClick={handleClick} className={style.selectedValue}>
        {value}
        <Image src='/icons/arrow.svg' alt='arrow' width={14} height={8} />
      </button>
      <ul ref={listRef} className={`${active ? style.listActive : ''} ${style.list}`}>
        {selectValues.map((item) => (
          <li key={item} onClick={() => handleSelect(item)} className={style.itemList}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
