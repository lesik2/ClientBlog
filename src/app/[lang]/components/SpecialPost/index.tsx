import Image from 'next/image';
import style from '@styles/homePage/specialPost.module.scss';
import button from '@styles/ui/button.module.scss';
import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import { Dictionary } from '@lib/dictionary';

export default function SpecialPost({ dictionary }: { dictionary: Dictionary }) {
  const { specialPost } = dictionary;

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
          <p className={style.subtitle}>{specialPost.subtitle}</p>
          <h1 className={style.title}>{specialPost.title}</h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </p>
          <Link href={ROUTES.aboutUs}>
            <button type='button' className={button.primary}>
              {specialPost.btn}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
