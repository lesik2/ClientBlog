import style from '@styles/aboutUsPage/aboutUs.module.scss';

import Header from './components/Header';
import Overview from './components/Overview';
import MissionVision from './components/MissionVision';
import OurTeam from './components/OurTeam';

export default function AboutUs() {
  return (
    <section className={style.aboutSection}>
      <div className={style.content}>
        <Header />
        <Overview />
        <MissionVision />
        <OurTeam />
      </div>
    </section>
  );
}
