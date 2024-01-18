import style from '@styles/ui/header.module.scss';
import { LocaleType } from '@customTypes/locale';

import { CONSTANTS } from './constants';
import LocaleSwitcher from './components/LocaleSwitcher';
import OpenModal from './components/OpenModal';

import { Navigation } from '../Navigation';

import { getDictionary } from '@/lib/dictionary';

export default async function Header({ lang }: LocaleType) {
  const { navigation, stepByStep } = await getDictionary(lang);
  const nameOfLinks = Object.values(navigation);

  return (
    <header className={style.header}>
      <p className={style.title}>{CONSTANTS.title}</p>
      <LocaleSwitcher />
      <div className={style.wrapper}>
        <Navigation type='header' nameOfLinks={nameOfLinks} />
        <OpenModal btnText={stepByStep.btn} />
      </div>
    </header>
  );
}
