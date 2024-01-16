import style from '@styles/aboutUsPage/header.module.scss';

export default function Header() {
  return (
    <header className={style.headerWrapper}>
      <div className={style.content}>
      <div className={style.aboutWrapper}>
        <p className={style.subtitle}>ABOUT US</p>
        <h1 className={style.title}>We are a team of content writers who share their learnings</h1>
      </div>
      <div className={style.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </div>
      </div>
     
    </header>
  );
}
