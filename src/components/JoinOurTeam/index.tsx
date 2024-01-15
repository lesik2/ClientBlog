import { ROUTES } from '@constants/routes';
import Link from 'next/link';
import style from '@styles/home/joinOurTeam.module.scss';
import button from '@styles/ui/button.module.scss';
import { Dictionary } from '@lib/dictionary';

export default function JoinOurTeam({ dictionary }: { dictionary: Dictionary }) {
  const { joinOurTeam } = dictionary;

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>{joinOurTeam.title}</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Link href={ROUTES.contact} className={style.link}>
          <button type='button' className={button.primary}>
            {joinOurTeam.btn}
          </button>
        </Link>
      </div>
    </div>
  );
}
