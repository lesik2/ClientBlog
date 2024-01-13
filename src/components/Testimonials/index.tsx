import style from '@styles/home/testimonials.module.scss';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className={style.wrapper}>
      <div className={style.content}>

        <div className={style.wrapperInfo}>
          <p className={style.subtitle}>TESTIMONIALS</p>
          <h2 className={style.title}>What people say about our blog</h2>
          <p className={style.infoDescription}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor.</p>
        </div>
        <div className={style.wrapperTestimonials}>
        <h4 className={style.text}>
          Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et
          dolore magna aliqua.
        </h4>
        <div className={style.wrapperUser}>

        <Image
          className={style.userIcon}
          height={48}
          width={48}
          src='/images/profile.png'
          alt='user profile'
        />
        <div className={style.userInfoWrapper}>
          <h4 className={style.userName}>Jonathan Vallem</h4>
          <p className={style.userAddress}>New york, USA</p>
        </div>
        </div>
        </div>
        <div className={style.wrapperBtn}>
          <button type='button' className={style.prevBtn}>
            <Image
              height={20}
              width={20}
              src='/icons/arrowPrev.svg'
              alt='prev arrow'
          />
          </button>
          <button type='button' className={style.nextBtn}>
            <Image
              height={26}
              width={26}
              src='/icons/arrowNext.svg'
              alt='next arrow'
          />
          </button>
        </div>
      </div>     
    </section>
  )
}
