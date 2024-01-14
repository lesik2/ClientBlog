import Image from 'next/image';
import style from '@styles/home/specialPost.module.scss';
import button from '@styles/ui/button.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';

export default function SpecialPost() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Image
          className={style.backImage}
          height={705}
          width={949}
          src='/images/specialPostBack.png'
          alt='special post'
        />
        <div className={style.specialPostWrapper}>
          <p className={style.subtitle}>Why we started</p>
          <h1 className={style.title}>It started out as a simple idea and evolved into our passion</h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <Link href={ROUTES.aboutUs}>
            <button type='button' className={button.primary}>
              Discover our story {'>'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
