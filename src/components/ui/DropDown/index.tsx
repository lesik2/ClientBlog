'use client';

import { Dispatch, useCallback, useState } from 'react';
import { useCloseList } from '@hooks/useCloseList';
import style from '@styles/ui/dropDown.module.scss';
import Image from 'next/image';

export interface IDropDown {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  selectValues: string[];
}

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
