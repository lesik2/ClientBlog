import button from '@styles/ui/button.module.scss';
import style from '@styles/homePage/stepByStep.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { Dictionary } from '@lib/dictionary';

import { CONSTANTS } from './constants';

export default function StepByStep({ dictionary }: { dictionary: Dictionary }) {
  const { stepByStep } = dictionary;

  return (
    <div className={style.stepSection}>
      <div className={style.content}>
        <p className={style.subtitle}>
          {stepByStep.subtitle}
          <span className={style.subtitleMark}>{CONSTANTS.subtitleMark}</span>
        </p>
        <p className={style.title}>{stepByStep.title}</p>
        <p className={style.info}>
          {stepByStep.StartFrom}
          <span className={style.infoMark}>{CONSTANTS.author}</span>
          <span className={style.divide}>{CONSTANTS.divide}</span>
          {stepByStep.date}
        </p>
        <p className={style.description}>{CONSTANTS.description}</p>
        <Link className={style.link} href={ROUTES.blogPost}>
          <button type='button' className={button.primary}>
            {stepByStep.btn}
          </button>
        </Link>
      </div>
    </div>
  );
}