import style from '@styles/contactPage/contact.module.scss';
import { LocaleType } from '@customTypes/locale';
import { Dictionary, getDictionary } from '@lib/dictionary';


import { MapComponent } from './components/Map/index';
import Form from './components/Form/index';

export default async function Contact({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);
  const { contact } = dictionary;

  return (
    <section className={style.contactSection}>
      <header className={style.header}>
        <p className={style.subtitle}>{contact.headerSubtitle}</p>
        <h1 className={style.title}>{contact.headerTitle}</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim.
        </p>
      </header>
      <div className={style.label}>
        <div className={style.infoCard}>
          <p className={style.infoSubtitle}>{contact.workTitle}</p>
          <h5 className={style.infoTitle}>{contact.workDays}</h5>
          <h5 className={style.infoTitle}>{contact.workTime}</h5>
          <p className={style.infoDescription}>{contact.workDescription}</p>
        </div>
        <div className={style.infoCard}>
          <p className={style.infoSubtitle}>{contact.headerSubtitle}</p>
          <h5 className={style.infoTitle}>020 7993 2905</h5>
          <p className={style.infoDescription}>hello@finsweet.com</p>
        </div>
      </div>
      <Form dictionary={dictionary} />
      <MapComponent />
    </section>
  );
}
