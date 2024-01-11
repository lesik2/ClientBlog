import Link from 'next/link';
import { ROUTES } from '@constants/routes';
import style from '@styles/home/aboutUs.module.scss';

import { Info } from './constants';

export  function About() {
  return (
    <section className={style.aboutUsSection}>
      <div className={style.content}>
        <div className={style.header}>
          <div className={style.first}/>
          <div className={style.second}/>
          <div className={style.third}/>
        </div>
        <div className={style.main}>
          <div className={style.card}>
            <p className={style.subtitle}>{Info[0].subtitle}</p>
            <h2 className={style.title}>{Info[0].title}</h2>
            <p className={style.description}>{Info[0].description}</p>
            <Link className={style.link} href={ROUTES.aboutUs}>
              Read More {'>'}
            </Link>
          </div>
          <div className={style.card}>
            <p className={style.subtitle}>{Info[1].subtitle}</p>
            <h3 className={style.title}>{Info[1].title}</h3>
            <p className={style.description}>{Info[1].description}</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
