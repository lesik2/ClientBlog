import Image from 'next/image';
import style from '@styles/homePage/testimonials.module.scss';
import { IWrapperButtons } from '@customTypes/index';


export default function WrapperButtons({ handleClickNext, handleClickPrev }: IWrapperButtons) {
  return (
    <div className={style.wrapperBtn}>
      <button type='button' className={style.prevBtn} onClick={handleClickPrev}>
        <Image height={20} width={20} src='/icons/arrowPrev.svg' alt='prev arrow' />
      </button>
      <button type='button' className={style.nextBtn} onClick={handleClickNext}>
        <Image height={26} width={26} src='/icons/arrowNext.svg' alt='next arrow' />
      </button>
    </div>
  );
}
