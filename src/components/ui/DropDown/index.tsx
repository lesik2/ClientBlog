import { Dispatch, memo, useState } from 'react';
import { useCloseList } from '@hooks/useCloseList';
import Image from 'next/image';
import _ from 'lodash';

import style from './dropDown.module.scss';

export interface IDropDown {
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  selectValues: string[];
}

export const DropDown = memo(({ value, setValue, selectValues }: IDropDown) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleCloseList = () => {
    setActive(false);
  };

  const handleSelect = (select: string) => () => {
    setValue(select);
    handleCloseList();
  };

  const [wrapperRef, listRef] = useCloseList(handleCloseList);

  return (
    <div ref={wrapperRef} className={style.dropDownWrapper}>
      <button data-cy='dropDownButton' type='button' onClick={handleClick} className={style.selectedValue}>
        {value}
        <Image src='/icons/arrow.svg' alt='arrow' width={14} height={8} />
      </button>
      <ul data-cy='dropDownList' ref={listRef} className={`${active ? style.listActive : ''} ${style.list}`}>
        {selectValues.map((item) => (
          <li key={item} onClick={handleSelect(item)} className={style.itemList}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}, _.isEqual);
