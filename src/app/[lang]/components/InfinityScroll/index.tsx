'use client';

import JoinOurTeam from '@components/JoinOurTeam';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import style from '@styles/home/infinityScroll.module.scss';
import { Dictionary } from '@lib/dictionary';

import Posts from '../Posts';
import SpecialPost from '../SpecialPost';
import ChooseCategory from '../ChooseCategory';
import AuthorsList from '../AuthorsList';
import About from '../About';
import Testimonials from '../Testimonials';
import Logo from '../Logo';
import StepByStep from '../StepByStep';

export interface IInfinityScroll {
  dictionary: Dictionary;
}

export default function InfinityScroll({ dictionary }: IInfinityScroll) {
  const components = [
    StepByStep,
    Posts,
    About,
    ChooseCategory,
    SpecialPost,
    AuthorsList,
    Logo,
    Testimonials,
    JoinOurTeam,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [inView]);

  return (
    <>
      {components.map((Component, index) =>
        index <= currentIndex ? (
          <section key={index} ref={index === currentIndex ? ref : undefined} className={style.fadeIn}>
            <Component dictionary={dictionary} />
          </section>
        ) : null,
      )}
    </>
  );
}
