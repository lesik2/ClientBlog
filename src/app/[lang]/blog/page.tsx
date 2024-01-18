import style from '@styles/blogPage/blog.module.scss';

import Header from './components/Header';
import Posts from './components/Posts';
import Categories from './components/Cagories';

import JoinOurTeam from '@/components/JoinOurTeam';
import { Dictionary, getDictionary } from '@/lib/dictionary';
import { LocaleType } from '@/types/locale';

export default async function Blog({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);

  return (
    <section className={style.blogSection}>
      <Header dictionary={dictionary} />
      <Posts dictionary={dictionary} />
      <Categories dictionary={dictionary} />
      <JoinOurTeam dictionary={dictionary} />
    </section>
  );
}
