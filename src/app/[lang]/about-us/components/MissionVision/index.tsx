import style from '@styles/aboutUsPage/missionVision.module.scss';

export default function MissionVision() {
  return (
    <section className={style.missionVisionSection}>
      <div className={style.content}>
        <div className={style.infoWrapper}>
          <p className={style.subtitle}>Our mission</p>
          <h3 className={style.title}>Creating valuable content for creatives all around the world</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className={style.infoWrapper}>
          <p className={style.subtitle}>Our Vision</p>
          <h3 className={style.title}>A platform that empowers individuals to improve</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </section>
  );
}
