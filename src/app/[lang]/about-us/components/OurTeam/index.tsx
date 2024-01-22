import Image from 'next/image';
import { Dictionary } from '@lib/dictionary';

import style from './ourTeam.module.scss';

export default function OurTeam({ dictionary }: { dictionary: Dictionary }) {
  const { aboutUsPage } = dictionary;

  return (
    <section className={style.ourTeamSection}>
      <div className={style.content}>
        <div className={style.infoWrapper}>
          <h2 className={style.title}>{aboutUsPage.ourTeamTitle}</h2>
          <h3 className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </h3>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className={style.imageContent}>
          <Image 
            src='/images/aboutUsTeam.png' 
            alt='our team' 
    
            sizes="(max-width: 1460) 60vw,100vw"
            fill
          />
        </div>
      </div>
    </section>
  );
}
