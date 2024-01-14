import { LocaleType } from '@customTypes/locale';
import InfinityScroll from '@components/InfinityScroll';

import { Dictionary, getDictionary } from '@/lib/dictionary';


export default async function Home({ params: { lang } }: { params: LocaleType }) {
  
  const dictionary: Dictionary = await getDictionary(lang)
  
  return (
    <>
      <InfinityScroll  dictionary={dictionary}/>
    </>
  );
}
