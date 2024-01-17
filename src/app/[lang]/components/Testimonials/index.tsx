import style from '@styles/homePage/testimonials.module.scss';
import { Dictionary } from '@lib/dictionary';
import Slider from '@components/ui/Slider';

import { REVIEW_CARDS } from './constants';
import ReviewCard from './components/ReviewCard';
import WrapperButtons from './components/WrapperButtons';

export default function Testimonials({ dictionary }: { dictionary: Dictionary }) {
  const { testimonials } = dictionary;

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
          <Slider WrapperButtons={WrapperButtons}>
            {REVIEW_CARDS.map((card, index) => (
              <ReviewCard key={index} {...card} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
