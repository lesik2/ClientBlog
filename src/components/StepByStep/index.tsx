import button from '@styles/ui/button.module.scss';
import style from '@styles/home/stepByStep.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { LocaleType } from '@customTypes/locale';

import { CONSTANTS } from './constants';

import { getDictionary } from '@/lib/dictionary';

export default async function StepByStep({ lang }: LocaleType) {
  const { stepByStep } = await getDictionary(lang);

  return (
    <section className={style.stepSection}>
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
    </section>
  );
}
