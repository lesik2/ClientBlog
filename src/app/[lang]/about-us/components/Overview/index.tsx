import { Dictionary } from '@lib/dictionary';
import style from '@styles/aboutUsPage/overview.module.scss';

export default function Overview({ dictionary }: { dictionary: Dictionary }) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.overviewSection}>
      <div className={style.overviewWrapper}>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>12+</h2>
          <p className={style.subtitle}>{aboutUsPage.blogs}</p>
        </div>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>18K+</h2>
          <p className={style.subtitle}>{aboutUsPage.views}</p>
        </div>
        <div className={style.resultWrapper}>
          <h2 className={style.title}>30K+</h2>
          <p className={style.subtitle}>{aboutUsPage.users}</p>
        </div>
      </div>
      <div className={style.designWrapper}>
        <div className={style.first} />
        <div className={style.second} />
      </div>
    </section>
  );
}
