'use client';

import JoinOurTeam from '@components/JoinOurTeam';
import { useInView } from 'react-intersection-observer';
import style from '@styles/ui/infinityScroll.module.scss';
import { IStaticRoute } from '@customTypes/staticRoute';

import { useShowNewComponent } from './hooks/useShowNewComponent';

import Posts from '../Posts';
import SpecialPost from '../SpecialPost';
import ChooseCategory from '../ChooseCategory';
import AuthorsList from '../AuthorsList';
import About from '../About';
import Testimonials from '../Testimonials';
import Logo from '../Logo';
import StepByStep from '../StepByStep';

export default function InfinityScroll({ dictionary, lang }: IStaticRoute) {
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
  ] as const;

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const currentIndex = useShowNewComponent(inView);

  return (
    <>
      {components.map((Component, index) =>
        index <= currentIndex ? (
          <section key={index} ref={index === currentIndex ? ref : undefined} className={style.fadeIn}>
            <Component dictionary={dictionary} lang={lang} />
          </section>
        ) : null,
      )}
    </>
  );
}
