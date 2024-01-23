import style from './infinityLoader.module.scss';

export function InfinityLoader() {
  return <div data-cy='loader' className={style.infinityScroll} />;
}
