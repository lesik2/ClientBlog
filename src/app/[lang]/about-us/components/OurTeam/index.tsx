import Image from 'next/image';
import style from '@styles/aboutUsPage/ourTeam.module.scss';

export default function OurTeam() {
  return (
    <section className={style.ourTeamSection}>
      <div className={style.content}>
        <div className={style.infoWrapper}>
          <h2 className={style.title}>Our team of creatives</h2>
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
          <Image src='/images/aboutUsTeam.png' alt='our team' width={624} height={480} />
        </div>
      </div>
    </section>
  );
}
