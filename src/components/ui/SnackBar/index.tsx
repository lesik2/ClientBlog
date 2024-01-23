import { useEffect, useState } from 'react';
import { ISnackbar } from '@customTypes/index';

import style from './snackBar.module.scss';
import { useShowSnackBar } from './hooks/useShowSnackBar';

export function SnackBar({ message }: ISnackbar) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (message) {
      setIsOpen(true);
    }
  }, [message]);

  useShowSnackBar(isOpen, setIsOpen);

  return <>{isOpen && <div className={style.snackBarWrapper}>{message}</div>}</>;
}
