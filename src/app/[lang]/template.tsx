import style from '@styles/ui/infinityScroll.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div className={style.fadeIn}>{children}</div>;
}
