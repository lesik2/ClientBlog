import style from '@styles/categoryPage/header.module.scss';

export default function Header({ category }: { category: string }) {
  return (
    <header className={style.header}>
      <div className={style.content}>
        <p className={style.title}>{category}</p>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className={style.category}>
          Blog {'>'} {category}
        </p>
      </div>
    </header>
  );
}
