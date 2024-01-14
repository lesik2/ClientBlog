import { ROUTES } from '@constants/routes';
import Link from 'next/link';
import style from '@styles/home/joinOurTeam.module.scss';
import button from '@styles/ui/button.module.scss';

export default function JoinOurTeam() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2 className={style.title}>Join our team to be a part of our story</h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Link href={ROUTES.contact} className={style.link}>
          <button type='button' className={button.primary}>
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
}
