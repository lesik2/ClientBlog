import style from '@styles/aboutUsPage/whyStarted.module.scss';
import ourTeam from '@styles/aboutUsPage/ourTeam.module.scss';
import Image from 'next/image';
import { Dictionary } from '@lib/dictionary';


export default function WhyStarted({ dictionary }: { dictionary: Dictionary }) {
  
  const {aboutUsPage} = dictionary;
  
  return (
    <section className={style.whyStartedSection}>
      <div className={style.content}>
        <div className={style.imageContent}>
          <Image src='/images/aboutUsWhyStarted.png' alt='why started' width={624} height={480} />
        </div>
        <div className={ourTeam.infoWrapper}>
          <h2 className={ourTeam.title}>{aboutUsPage.whyStartedTitle}</h2>
          <h3 className={ourTeam.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </h3>
          <p className={ourTeam.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat.
          </p>
        </div>
      </div>
    </section>
  );
}
