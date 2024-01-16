import style from '@styles/aboutUsPage/overview.module.scss';

export default function Overview() {
  return (
    <section className={style.overviewSection}>
      <div className={style.overviewWrapper}>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>12+</h2>
          <p className={style.subtitle}>Blogs Published</p>
        </div>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>18K+</h2>
          <p className={style.subtitle}>Views on Finsweet</p>
        </div>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>30K+</h2>
          <p className={style.subtitle}>Total active Users</p>
        </div>
      </div>
      <div className={style.designWrapper}>
        <div className={style.first} />
        <div className={style.second} />
      </div>
    </section>
  );
}
