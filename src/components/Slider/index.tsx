'use client';

import  { ReactNode, useState } from "react";
import style from '@styles/home/testimonials.module.scss';
import slider from '@styles/home/slider.module.scss';
import Image from 'next/image';

export interface ISlider{
  cards: ReactNode[];
}
const Slider = ({ cards }: ISlider) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((index)=>{
      if(index === 0) return cards.length-1;

      return currentIndex-1
    })
  }

  const handleNext = () =>{
    setCurrentIndex((index)=>{
      if(index === cards.length-1) return 0;

      return currentIndex+1
    })
  }

  return (
    <div className={slider.wrapperSlider}>
      {cards.map((card, index) => (
        <div className={slider.wrapperCard} key={index} style={{ translate: `${-100* currentIndex}%` }}>
          {card}
        </div>
      ))}
      <div className={style.wrapperBtn}>
          <button type='button' className={style.prevBtn} onClick={handlePrev}>
            <Image
              height={20}
              width={20}
              src='/icons/arrowPrev.svg'
              alt='prev arrow'
          />
          </button>
          <button type='button' className={style.nextBtn} onClick={handleNext}>
            <Image
              height={26}
              width={26}
              src='/icons/arrowNext.svg'
              alt='next arrow'
          />
          </button>
        </div>
    </div>
  );
};

export default Slider;
