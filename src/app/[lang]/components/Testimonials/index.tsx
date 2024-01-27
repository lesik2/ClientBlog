import { Dictionary } from '@lib/dictionary';
import { useMemo } from 'react';

import style from './testimonials.module.scss';
import { REVIEW_CARDS } from './constants';
import ReviewCard from './atoms/ReviewCard';
import Slider from './atoms/Slider/index';

export default function Testimonials({ dictionary }: { dictionary: Dictionary }) {
  const { testimonials } = dictionary;
  const reviewCards = useMemo(
    () => REVIEW_CARDS.map((card, index) => <ReviewCard key={index} {...card} />),
    [],
  );

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.wrapperInfo}>
          <p className={style.subtitle}>{testimonials.subtitle}</p>
          <h2 className={style.title}>{testimonials.title}</h2>
          <p className={style.infoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <div className={style.wrapperSlider}>
          <Slider>{reviewCards}</Slider>
        </div>
      </div>
    </div>
  );
}
