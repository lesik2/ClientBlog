import style from '@styles/home/logo.module.scss';
import Image from 'next/image';

import { LOGO_ICONS } from './constants';

export default function Logo() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.wrapperInfo}>
          <p className={style.subtitle}>We are</p>
          <h4 className={style.title}>Featured in</h4>
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
