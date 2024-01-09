import variables from './variables.module.scss';

export default function Home() {
  return (
    <main>
      <div style={{ color: variables.primaryColor }}>{process.env.APP}</div>
    </main>
  );
}
