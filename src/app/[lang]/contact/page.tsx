import style from '@styles/contactPage/contact.module.scss';

import Form from './components/form';

export default function Contact() {
  return (
    <section className={style.contactSection}>
      <header className={style.header}>
          <p className={style.subtitle}>
            Contact us
          </p>
          <h1 className={style.title}>
            Let’s Start a Conversation
          </h1>
          <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim.
          </p>
        </header>
        <div className={style.label}>
          <div className={style.infoCard}>
            <p className={style.infoSubtitle}>Working hours</p>
            <h5 className={style.infoTitle}>Monday To Friday</h5>
            <h5 className={style.infoTitle}>9:00 AM to 8:00 PM</h5>
            <p className={style.infoDescription}>Our Support Team is available 24/7</p>
          </div>
          <div className={style.infoCard}>
            <p className={style.infoSubtitle}>Contact Us</p>
            <h5 className={style.infoTitle}>020 7993 2905</h5>
            <p className={style.infoDescription}>hello@finsweet.com</p>
          </div>
        </div>
        <Form />
    </section>
 
  )
}
