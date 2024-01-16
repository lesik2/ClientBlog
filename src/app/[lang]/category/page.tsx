import style from '@styles/categoryPage/category.module.scss';

import Header from './components/Header';

export default function Category() {
  return (
    <section className={style.categorySection}>
      <Header />
    </section>
  );
}
