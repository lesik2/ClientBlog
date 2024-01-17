import style from '@styles/blogPost/blogPost.module.scss';
import JoinOurTeam from '@components/JoinOurTeam';
import { Dictionary, getDictionary } from '@lib/dictionary';
import { LocaleType } from '@customTypes/locale';

import Header from './components/Header';
import Main from './components/Main';
import Posts from './components/Posts';

export default async function BlogPost({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);

  return (
    <section className={style.blogPostSection}>
      <Header />
      <Main />
      <Posts />
      <JoinOurTeam dictionary={dictionary} />
    </section>
  );
}
