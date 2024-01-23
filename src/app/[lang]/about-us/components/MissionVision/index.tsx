import { Dictionary } from '@lib/dictionary';

import style from './missionVision.module.scss';

export default function MissionVision({ dictionary }: { dictionary: Dictionary }) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.missionVisionSection}>
      <div className={style.content}>
        <div className={style.infoWrapper}>
          <p className={style.subtitle}>{aboutUsPage.missionSubtitle}</p>
          <h3 className={style.title}>{aboutUsPage.missionTitle}</h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className={style.infoWrapper}>
          <p className={style.subtitle}>{aboutUsPage.visionSubtitle}</p>
          <h3 className={style.title}>{aboutUsPage.visionTitle}</h3>
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
