import style from '@styles/categoryPage/header.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <p className={style.title}>Business</p>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className={style.category}>Blog {'>'} Business</p>
      </div>
    </header>
  );
}
