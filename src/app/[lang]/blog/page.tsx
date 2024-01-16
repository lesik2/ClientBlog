import style from '@styles/blog/blog.module.scss';

import Header from './components/Header';

export default function Blog() {
  return (
    <section className={style.blogSection}>
      <Header />
    </section>
  );
}
