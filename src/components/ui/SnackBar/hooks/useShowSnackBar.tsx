import { useCallback, useEffect, useState } from 'react';

export function useShowSnackBar(): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState(true);

  const closeSnackBar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openSnackBar = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return () => {};

    const idTimer = setTimeout(closeSnackBar, 4000);

    return () => {
      clearTimeout(idTimer);
    };
  }, [isOpen, closeSnackBar]);

  return [isOpen, openSnackBar];
}
