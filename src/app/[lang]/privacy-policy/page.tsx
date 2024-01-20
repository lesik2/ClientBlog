import { Dictionary, getDictionary } from '@lib/dictionary';
import { LocaleType } from '@customTypes/locale';
import style from '@styles/privacyPolicyPage/privacyPolicy.module.scss';

export default async function PrivacyPolicy({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);
  const { privacyPolicy } = dictionary;

  return (
    <section className={style.sectionPolicy}>
      <header className={style.header}>
        <h2 className={style.headerTitle}>{privacyPolicy.title}</h2>
        <p className={style.headerSubtitle}>{privacyPolicy.lastUpdate}</p>
      </header>
      <main className={style.main}>
        <div className={style.content}>
          <h1 className={style.title}>Lorem ipsum dolor sit amet</h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis
            natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque
            egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non. Sit amet nulla
            facilisi morbi tempus iaculis urna. Lorem sed risus ultricies tristique nulla aliquet enim.
            Volutpat blandit aliquam etiam erat velit. Orci eu lobortis elementum nibh. Ipsum suspendisse
            ultrices gravida dictum fusce ut placerat orci nulla. Neque convallis a cras semper auctor neque
            vitae tempus quam.
          </p>
          <h2 className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h2>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem
            sed risus ultricies tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci
            eu lobortis elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci
            nulla. Neque convallis a cras semper auctor neque vitae tempus quam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum
            quisque non. Sit amet nulla facilisi morbi tempus iaculis urna. Lorem sed risus ultricies
            tristique nulla aliquet enim. Volutpat blandit aliquam etiam erat velit. Orci eu lobortis
            elementum nibh. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Neque
            convallis a cras semper auctor neque vitae tempus quam.
          </p>
        </div>
      </main>
    </section>
  );
}
