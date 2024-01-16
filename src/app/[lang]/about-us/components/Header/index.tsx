import { Dictionary } from '@lib/dictionary';
import style from '@styles/aboutUsPage/header.module.scss';

export default function Header({ dictionary }: { dictionary: Dictionary }) {
  const {aboutUsPage} = dictionary;
  
  return (
    <header className={style.headerWrapper}>
      <div className={style.content}>
        <div className={style.aboutWrapper}>
          <p className={style.subtitle}>{aboutUsPage.headerSubtitle}</p>
          <h1 className={style.title}>{aboutUsPage.headerTitle}</h1>
        </div>
        <div className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </header>
  );
}
