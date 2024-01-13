import { LocaleType } from '@customTypes/index';

import { About } from '@/components/About';
import { Posts } from '@/components/Posts';
import  StepByStep  from '@/components/StepByStep';

export default function Home({params: { lang }}: LocaleType) {

  return (
    <>
      <StepByStep lang={lang}/>
      <Posts />
      <About />
    </>
  );
}
