import { IButton } from '@customTypes/ui';
import style from '@styles/ui/button.module.scss';


export function Button({ type = 'primary' }: IButton) {
  return (
    <button type='button' className={type === 'primary' ? style.primary : style.secondary}>
      Read More {'>'}
    </button>
  );
}
