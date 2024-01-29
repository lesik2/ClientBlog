import style from '@styles/ui/infinityScroll.module.scss';

export interface ITemplate {
  children: React.ReactNode;
}

export default function Template({ children }: ITemplate) {
  return <div className={style.fadeIn}>{children}</div>;
}
