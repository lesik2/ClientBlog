import { ROUTES } from '@constants/routes';
import Link from 'next/link';
import button from '@styles/ui/button.module.scss';
import { IStaticRoute } from '@customTypes/staticRoute';

import style from './joinOurTeam.module.scss';

export default function JoinOurTeam({ dictionary, lang }: IStaticRoute) {
  const { joinOurTeam } = dictionary;

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{joinOurTeam.title}</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Link data-cy='join-our-team-link' href={`/${lang}${ROUTES.contact}`} className={style.link}>
          <button type='button' className={button.primary}>
            {joinOurTeam.btn}
          </button>
        </Link>
      </div>
    </div>
  );
}
