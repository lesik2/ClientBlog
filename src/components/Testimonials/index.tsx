import style from '@styles/home/testimonials.module.scss';

import { REVIEW_CARDS } from './constants';
import ReviewCard from './components/ReviewCard';

import Slider from '../Slider';

export default function Testimonials() {
  

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.wrapperInfo}>
          <p className={style.subtitle}>TESTIMONIALS</p>
          <h2 className={style.title}>What people say about our blog</h2>
          <p className={style.infoDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <Slider>
          {REVIEW_CARDS.map((card, index) => <ReviewCard key={index} {...card} />)}
        </Slider>
      </div>
    </div>
  );
}
