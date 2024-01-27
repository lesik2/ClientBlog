'use client';

import { useCallback, useState } from 'react';

import slider from './slider.module.scss';

import { ISlider } from '../../interfaces';
import WrapperButtons from '../WrapperButtons';

const Slider = ({ children }: ISlider) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    const { length } = children;
    setCurrentIndex((index) => (index === 0 ? length - 1 : index - 1));
  }, [children]);

  const handleNext = useCallback(() => {
    const { length } = children;
    setCurrentIndex((index) => (index === length - 1 ? 0 : index + 1));
  }, [children]);

  return (
    <div className={slider.wrapperSlider}>
      <div className={slider.wrapperCards}>
        {children.map((card, index) => (
          <div className={slider.wrapperCard} key={index} style={{ translate: `${-100 * currentIndex}%` }}>
            {card}
          </div>
        ))}
      </div>
      <WrapperButtons handleClickNext={handleNext} handleClickPrev={handlePrev} />
    </div>
  );
};

export default Slider;
