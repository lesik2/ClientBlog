import { LocaleType } from '@customTypes/locale';
import { Metadata } from 'next';

import style from './blog.module.scss';
import Header from './components/Header';
import Posts from './components/Posts';
import Categories from './components/Cagories';

import JoinOurTeam from '@/components/JoinOurTeam';
import { Dictionary, getDictionary } from '@/lib/dictionary';

export const metadata: Metadata = {
  title: 'Blog posts',
};

export default async function Blog({ params: { lang } }: { params: LocaleType }) {
  const dictionary: Dictionary = await getDictionary(lang);

  return (
    <section className={style.blogSection}>
      <Header dictionary={dictionary} lang={lang}/>
      <Posts dictionary={dictionary} lang={lang}/>
      <Categories dictionary={dictionary} lang={lang}/>
      <JoinOurTeam dictionary={dictionary} lang={lang}/>
    </section>
  );
}
