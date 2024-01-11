import style from '@styles/ui/header.module.scss';
import button from '@styles/ui/button.module.scss';

import { CONSTANTS } from './constants';

import { Navigation } from '../Navigation';

export function Header() {
  return (
    <header className={style.header}>
      <p className={style.title}>{CONSTANTS.title}</p>
      <div className={style.wrapper}>
        <Navigation type='header' />
        <button type='button' className={button.secondary}>
          {CONSTANTS.btn}
        </button>
      </div>
    </header>
  );
}
