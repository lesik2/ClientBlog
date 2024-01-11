import button from '@styles/ui/button.module.scss';
import style from '@styles/home/stepByStep.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

import { CONSTANTS } from './constants';

export function StepByStep() {
  return (
    <section className={style.stepSection}>
      <div className={style.content}>
        <p className={style.subtitle}>
          {CONSTANTS.subtitle}
          <span className={style.subtitleMark}>{CONSTANTS.subtitleMark}</span>
        </p>
        <p className={style.title}>{CONSTANTS.title}</p>
        <p className={style.info}>
          By<span className={style.infoMark}>{CONSTANTS.author}</span>
          <span className={style.divide}>{CONSTANTS.divide}</span>
          {CONSTANTS.date}
        </p>
        <p className={style.description}>{CONSTANTS.description}</p>
        <Link className={style.link} href={ROUTES.blogPost}>
          <button type='button' className={button.primary}>
            {CONSTANTS.btn}
          </button>
        </Link>
      </div>
    </section>
  );
}
