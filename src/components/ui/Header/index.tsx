'use client';

import { Dictionary } from '@lib/dictionary';
import { useState } from 'react';
import { BurgerMenu } from '@components/BurgerMenu';
import Menu from '@components/Menu';

import style from './header.module.scss';
import { CONSTANTS } from './constants';
import LocaleSwitcher from './components/LocaleSwitcher';
import OpenModal from './components/OpenModal';

import { Navigation } from '../Navigation';

export default function Header({ dictionary }: { dictionary: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, stepByStep } = dictionary;
  const nameOfLinks = Object.values(navigation);

  return (
    <header className={style.header}>
      <p className={style.title}>{CONSTANTS.title}</p>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={style.menuWrapper}>
          <LocaleSwitcher />
          <div className={style.wrapper}>
            <Navigation type='header' nameOfLinks={nameOfLinks} setIsOpen={setIsOpen} isFooter={false}/>
            <OpenModal btnText={stepByStep.btn} />
          </div>
        </div>
      </Menu>

      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
