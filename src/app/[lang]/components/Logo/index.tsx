import style from '@styles/homePage/logo.module.scss';
import Image from 'next/image';
import { Dictionary } from '@lib/dictionary';

import { LOGO_ICONS } from './constants';

export default function Logo({ dictionary }: { dictionary: Dictionary }) {
  const { logos } = dictionary;

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.wrapperInfo}>
          <p className={style.subtitle}>{logos.subtitle}</p>
          <h4 className={style.title}>{logos.title}</h4>
        </div>
        <div className={style.wrapperLogos}>
          {LOGO_ICONS.map((logo) => (
            <Image className={style.logoIcon} key={logo} src={logo} alt='logo' height={0} width={0} />
          ))}
        </div>
      </div>
    </div>
  );
}
