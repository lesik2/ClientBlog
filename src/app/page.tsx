import { About } from '@/components/About';
import { Posts } from '@/components/Posts';
import { StepByStep } from '@/components/StepByStep';

export default function Home() {
  return (
    <>
      <StepByStep />
      <Posts />
      <About />
    </>
  );
}
