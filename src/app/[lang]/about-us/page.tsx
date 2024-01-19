import style from '@styles/aboutUsPage/aboutUs.module.scss';
import JoinOurTeam from '@components/JoinOurTeam';
import { LocaleType } from '@customTypes/locale';
import { Dictionary, getDictionary } from '@lib/dictionary';
import { Metadata } from 'next/types';


import Header from './components/Header';
import Overview from './components/Overview';
import MissionVision from './components/MissionVision';
import OurTeam from './components/OurTeam';
import WhyStarted from './components/WhyStarted';
import Authors from './components/Authors';


export const metadata: Metadata = {
  title: 'About us',
};

export default async function AboutUs({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);


  return (
    <section className={style.aboutSection}>
      <div className={style.content}>
        <Header dictionary={dictionary} />
        <Overview dictionary={dictionary} />
        <MissionVision dictionary={dictionary} />
        <OurTeam dictionary={dictionary} />
        <WhyStarted dictionary={dictionary} />
        <Authors dictionary={dictionary} />
        <JoinOurTeam dictionary={dictionary} />
      </div>
    </section>
  );
}
