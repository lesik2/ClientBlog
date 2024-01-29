import Image from 'next/image';
import { memo } from 'react';

import style from '../../testimonials.module.scss';
import { IWrapperButtons } from '../../interfaces';

const WrapperButtons = memo(({ handleClickNext, handleClickPrev }: IWrapperButtons) => (
  <div className={style.wrapperBtn}>
    <button type='button' className={style.prevBtn} onClick={handleClickPrev}>
      <Image height={20} width={20} src='/icons/arrowPrev.svg' alt='prev arrow' />
    </button>
    <button type='button' className={style.nextBtn} onClick={handleClickNext}>
      <Image height={26} width={26} src='/icons/arrowNext.svg' alt='next arrow' />
    </button>
  </div>
));

export default WrapperButtons;
