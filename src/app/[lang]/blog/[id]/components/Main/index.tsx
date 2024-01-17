import Image from 'next/image';
import style from '@styles/blogPost/main.module.scss';

export default function Main() {
  return (
    <main className={style.mainSection}>
      <Image className={style.image} src='/images/blogPostBack.png' alt='post' width={1280} height={582} />
      <div className={style.content}>
        <article className={style.article}>
          <h2 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <p className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non.
          </p>
        </article>
        <article className={style.article}>
          <h2 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <p className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non.
          </p>
          <p className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non.
          </p>
          <ul className={style.list}>
            <li>
              <h4>Lorem ipsum dolor sit amet</h4>
            </li>
            <li>
              <h4>Non blandit massa enim nec scelerisque</h4>
            </li>
            <li>
              <h4>Neque egestas congue quisque egestas</h4>
            </li>
          </ul>
          <p className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non.
          </p>
        </article>
        <article className={style.article}>
          <h2 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </h2>
          <p className={style.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
            sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
            montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus
            in hendrerit gravida rutrum quisque non.
          </p>
        </article>
      </div>
    </main>
  );
}
