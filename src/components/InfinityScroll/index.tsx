'use client';

import About from '@components/About';
import Posts from '@components/Posts';
import StepByStep from '@components/StepByStep';
import ChooseCategory from '@components/ChooseCategory';
import AuthorsList from '@components/AuthorsList';
import SpecialPost from '@components/SpecialPost';
import JoinOurTeam from '@components/JoinOurTeam';
import Logo from '@components/Logo';
import Testimonials from '@components/Testimonials';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import style from '@styles/home/infinityScroll.module.scss';
import { Dictionary } from '@lib/dictionary';

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
    threshold: 0.6,
    delay: 150,
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
