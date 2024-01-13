import { LocaleType } from '@customTypes/locale';

import { About } from '@/components/About';
import { Posts } from '@/components/Posts';
import StepByStep from '@/components/StepByStep';

export default function Home({ params: { lang } }: {params: LocaleType}) {
  return (
    <>
      <StepByStep lang={lang} />
      <Posts />
      <About />
    </>
  );
}
