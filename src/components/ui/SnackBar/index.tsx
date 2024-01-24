import { useEffect, useState } from 'react';


import style from './snackBar.module.scss';
import { useShowSnackBar } from './hooks/useShowSnackBar';


export interface ISnackbar {
  message: string;
}

export function SnackBar({ message }: ISnackbar) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (message) {
      setIsOpen(true);
    }
  }, [message]);

  useShowSnackBar(isOpen, setIsOpen);

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
