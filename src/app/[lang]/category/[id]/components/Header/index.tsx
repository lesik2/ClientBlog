import { memo } from 'react';

import style from './header.module.scss';

const Header = memo(({ category }: { category: string }) => (
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
));

export default Header;
