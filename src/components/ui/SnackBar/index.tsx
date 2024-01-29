import { useEffect } from 'react';

import style from './snackBar.module.scss';
import { useShowSnackBar } from './hooks/useShowSnackBar';

export interface ISnackbar {
  message: string;
}

export function SnackBar({ message }: ISnackbar) {
  const [isOpen, openSnackBar] = useShowSnackBar();

  useEffect(() => {
    if (message) {
      openSnackBar();
    }
  }, [message, openSnackBar]);

  return (
    <>
      {isOpen && (
        <div data-cy='snack-bar' className={style.snackBarWrapper}>
          {message}
        </div>
      )}
    </>
  );
}
