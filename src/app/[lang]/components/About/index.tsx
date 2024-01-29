import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { IStaticRoute } from '@customTypes/staticRoute';

import style from './aboutUs.module.scss';
import { AboutDescription, MissionDescription } from './constants';

export default function About({ dictionary, lang }: IStaticRoute) {
  const { aboutUs } = dictionary;

  return (
    <section className={style.aboutUsSection}>
      <div className={style.content}>
        <div className={style.header}>
          <div className={style.first} />
          <div className={style.second} />
          <div className={style.third} />
        </div>
        <div className={style.main}>
          <div className={style.card}>
            <p className={style.subtitle}>{aboutUs.aboutSubtitle}</p>
            <h2 className={style.title}>{aboutUs.aboutTitle}</h2>
            <p className={style.description}>{AboutDescription}</p>
            <Link data-cy='aboutUsLink' className={style.link} href={`/${lang}${ROUTES.aboutUs}`}>
              Read More {'>'}
            </Link>
          </div>
          <div className={style.card}>
            <p className={style.subtitle}>{aboutUs.missionSubtitle}</p>
            <h3 className={style.title}>{aboutUs.missionTitle}</h3>
            <p className={style.description}>{MissionDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
