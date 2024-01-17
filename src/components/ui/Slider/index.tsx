'use client';

import { FC, ReactNode, useState } from 'react';
import slider from '@styles/home/slider.module.scss';
import { IWrapperButtons } from '@components/Testimonials/components/WrapperButtons';


export interface ISlider {
  children: ReactNode[];
  WrapperButtons: FC<IWrapperButtons>;
}
const Slider = ({ children, WrapperButtons }: ISlider) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((index) => {
      if (index === 0) return children.length - 1;

      return currentIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((index) => {
      if (index === children.length - 1) return 0;

      return currentIndex + 1;
    });
  };

  return (
    <div className={slider.wrapperSlider}>
      <div className={slider.wrapperCards}>
        {children.map((card, index) => (
          <div className={slider.wrapperCard} key={index} style={{ translate: `${-100 * currentIndex}%` }}>
            {card}
          </div>
        ))}
      </div>
      <WrapperButtons  handleClickNext={handleNext} handleClickPrev={handlePrev}/>
    </div>
  );
};

export default Slider;