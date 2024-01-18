import style from '@styles/homePage/infinityScroll.module.scss';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div  className={style.fadeIn}>
      {children}
    </div>
  )

}