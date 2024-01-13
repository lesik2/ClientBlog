import { LocaleType } from '@customTypes/locale';

import { About } from '@/components/About';
import { Posts } from '@/components/Posts';
import StepByStep from '@/components/StepByStep';
import { ChooseCategory } from '@/components/ChooseCategory';
import { AuthorsList } from '@/components/AuthorsList';
import { SpecialPost } from '@/components/SpecialPost';

export default function Home({ params: { lang } }: { params: LocaleType }) {
  return (
    <>
      <StepByStep lang={lang} />
      <Posts />
      <About />
      <ChooseCategory />
      <SpecialPost />
      <AuthorsList />
    </>
  );
}
